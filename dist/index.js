// Base URL
const ROOT = 'https://api.lever.co/v1';
/**
 * Factory to build a strongly‐typed Endpoint with Basic auth passed to `call`.
 */
function createEndpoint(config) {
    const call = async (apiKey, data, init = {}) => {
        // 1. interpolate path params
        let url = config.path;
        for (const [key, val] of Object.entries('params' in data ? data.params : {})) {
            url = url.replace(`:${key}`, encodeURIComponent(val));
        }
        // 2. build query string
        const qs = new URLSearchParams(Object.entries('query' in data ? (data.query ?? []) : [])
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
            ...(config.method === 'GET' || !('body' in data)
                ? {}
                : { body: JSON.stringify(data.body) }),
            ...init,
        });
        if (!res.ok) {
            throw new Error(`${config.method} ${fullUrl} HTTP ${res.status}: ${res.statusText}`);
        }
        return (await res.json());
    };
    return call;
}
/**
 * @deprecated Use `retrieveOpportunity` with `expand` set to `applications`.
 */
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
export const retrievePosting = createEndpoint({
    method: 'GET',
    path: '/postings/:posting',
});
export const retrieveInterview = createEndpoint({
    method: 'GET',
    path: '/opportunities/:opportunity/interviews/:interview',
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
/**
 ***Update opportunity archived state**
 * Update an Opportunity's archived state. If an Opportunity is already archived, its archive reason can be changed or if null is specified as the reason, it will be unarchived. If an Opportunity is active, it will be archived with the reason provided.
 *
 * The requisitionId is optional. If the provided reason maps to ‘Hired’ and a requisition is provided, the Opportunity will be marked as Hired, the active offer is removed from the requisition, and the hired count for the requisition will be incremented.
 *
 * If a requisition is specified and there are multiple active applications on the profile, you will receive an error. If the specific requisition is closed, you will receive an error. If there is an offer extended, it must be signed, and the offer must be associated with an application for a posting linked to the provided requisition. You can hire a candidate against a requisition without an offer.
 */
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