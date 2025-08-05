// Base URL
const ROOT = 'https://api.lever.co/v1';
/**
 * Factory to build a strongly‐typed Endpoint with Basic auth passed to `call`.
 */
function createEndpoint(config) {
    const call = async (apiKey, { params, query, body, }, init = {}) => {
        // 1. interpolate path params
        let url = config.path;
        for (const [key, val] of Object.entries(params)) {
            url = url.replace(`:${key}`, encodeURIComponent(val));
        }
        // 2. build query string
        const qs = new URLSearchParams(Object.entries(query)
            .filter(([, v]) => v != null)
            .map(([k, v]) => [k, String(v)])).toString();
        const fullUrl = `${ROOT}${url}${qs ? '?' + qs : ''}`;
        // 3. prepare headers (Basic auth + JSON if needed)
        const defaultHeaders = {
            Authorization: `Basic ${btoa(apiKey + ':')}`,
        };
        if (config.method !== 'GET') {
            defaultHeaders['Content-Type'] = 'application/json';
        }
        // allow user to override/augment headers via init.headers
        const mergedHeaders = {
            ...defaultHeaders,
            ...(init.headers ?? {}),
        };
        // 4. perform fetch
        const res = await fetch(fullUrl, {
            method: config.method,
            headers: mergedHeaders,
            ...(config.method === 'GET' ? {} : { body: JSON.stringify(body) }),
            ...init,
        });
        if (!res.ok) {
            throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        return (await res.json());
    };
    return call;
}
export const retrieveApplication = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity/applications/:application',
});
export const listApplications = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity/applications',
});
export const applyToPosting = createEndpoint({
    method: 'POST',
    path: '/postings/:posting/apply',
});
export const createApplication = applyToPosting;
export const retrieveInterview = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity/interview/:interview',
});
export const listInterviews = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity/interviews',
});
export const createInterview = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/interviews',
});
export const updateInterview = createEndpoint({
    method: 'PUT',
    path: '/opportunities/:opportunity/interviews/:interview',
});
export const deleteInterview = createEndpoint({
    method: 'DELETE',
    path: '/opportunities/:opportunity/interviews/:interview',
});
export const retrieveNote = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity/notes/:note',
});
export const listNotes = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity/notes',
});
export const createNote = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/notes',
});
export const updateNote = createEndpoint({
    method: 'PUT',
    path: '/opportunities/:opportunity/notes/:note',
});
export const deleteNote = createEndpoint({
    method: 'DELETE',
    path: '/opportunities/:opportunity/notes/:note',
});
export const retrieveOpportunity = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity',
});
export const listOpportunities = createEndpoint({
    method: 'GET',
    path: '/opportunities',
});
export const listDeletedOpportunities = createEndpoint({
    method: 'GET',
    path: '/opportunities/deleted',
});
export const createOpportunity = createEndpoint({
    method: 'POST',
    path: '/opportunities',
});
export const updateOpportunityStage = createEndpoint({
    method: 'PUT',
    path: '/opportunities/:opportunity/stage',
});
export const updateOpportunityArchivedState = createEndpoint({
    method: 'PUT',
    path: '/opportunities/:opportunity/archived',
});
export const addContactLinksByOpportunity = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/addLinks',
});
export const removeContactLinksByOpportunity = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/removeLinks',
});
export const addOpportunityTags = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/addTags',
});
export const removeOpportunityTags = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/removeTags',
});
export const addOpportunitySources = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/addSources',
});
export const removeOpportunitySources = createEndpoint({
    method: 'POST',
    path: '/opportunities/:opportunity/removeSources',
});
export const getStage = createEndpoint({
    method: 'GET',
    path: '/stages/:stage',
});
export const getStages = createEndpoint({
    method: 'GET',
    path: '/stages',
});
export const getTags = createEndpoint({
    method: 'GET',
    path: '/tags',
});
//# sourceMappingURL=index.js.map