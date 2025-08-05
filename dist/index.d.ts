export interface Application {
    id: string;
    opportunityId: string;
    candidateId: string;
    createdAt: number;
    type: string;
    posting: string;
    user?: string;
    name?: string;
    email?: string;
    phone?: {
        type: any;
        value: string;
    };
    company: any;
    links: any;
    comments?: string;
    resume: any;
    customQuestions?: Array<{
        accountId?: string;
        createdAt: number;
        text: string;
        description: string;
        type: string;
        fields: Array<{
            type: string;
            required: boolean;
            text: string;
            description: string;
            options?: Array<{
                text: string;
            }>;
            isSummary?: boolean;
            summaryText?: string;
            value: any;
            prompt?: string;
        }>;
        baseTemplateId: string;
        referrerId?: string;
        userId?: string;
        user?: string;
        stage: any;
        completedAt?: number;
    }>;
    requisitionForHire?: {
        id: string;
        requisitionCode: string;
        hiringManagerOnHire: string;
    };
    ownerId?: string;
    hiringManager?: string;
}
export interface ArchiveReason {
    id: string;
    text: string;
    status: string;
    type: string;
}
export interface AuditEvent {
    id: string;
    createdAt: number;
    type: string;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    };
    target: {
        id: string;
        type: string;
        label: string;
    };
    meta: {
        authentication?: {
            method: string;
            error: {
                message: string;
                type: string;
            };
        };
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
        };
    };
}
export interface Contact {
    id: string;
    name: string;
    headline: string;
    isAnonymized: boolean;
    location: {
        name: string;
    };
    emails: Array<string>;
    phones: Array<{
        type: string;
        value: string;
    }>;
}
export interface Feedback {
    id: string;
    type: string;
    text: string;
    instructions: string;
    fields: Array<{
        id: string;
        type: string;
        text: string;
        description: string;
        required: boolean;
        value: any;
        prompt?: string;
        options?: Array<{
            text: string;
        }>;
    }>;
    baseTemplateId: string;
    interview: string;
    panel: string;
    user: string;
    createdAt: number;
    updatedAt: number;
    completedAt: number;
    deletedAt: number;
}
export interface FeedbackTemplate {
    id: string;
    text: string;
    group?: {
        id: string;
        name: string;
    };
    createdAt: number;
    updatedAt: number;
    instructions: string;
    stage?: {
        id: string;
        text: string;
    };
    fields: Array<{
        id: string;
        description: string;
        options: Array<{
            text: string;
        }>;
        prompt: string;
        required: boolean;
        text: string;
        type: string;
    }>;
}
export interface FileObject {
    id: string;
    downloadUrl: string;
    ext: string;
    name: string;
    uploadedAt: string;
    status: string;
    size: string;
}
export interface Interview {
    id: string;
    panel: string;
    subject: string;
    note: string;
    interviewers: Array<{
        email: string;
        id: string;
        name: string;
        feedbackTemplate: string;
    }>;
    timezone: string;
    createdAt: number;
    date: number;
    duration: number;
    location: string;
    feedbackTemplate: string;
    feedbackForms: Array<string>;
    feedbackReminder: string;
    user: string;
    stage: string;
    canceledAt: any;
    postings: Array<string>;
}
export interface Note {
    id: string;
    text: string;
    fields: Array<{
        type: string;
        text: string;
        value: string;
        createdAt: number;
        user: string;
        score: number;
        stage: string;
    }>;
    user: string;
    secret: boolean;
    completedAt: number;
    createdAt: number;
    deletedAt: number;
}
export interface Offer {
    id: string;
    createdAt: number;
    status: string;
    creator: string;
    fields: Array<{
        text: string;
        identifier: string;
        value: any;
    }>;
    sentDocument: {
        fileName: string;
        uploadedAt: number;
        downloadUrl: string;
    };
    signedDocument?: {
        fileName: string;
        uploadedAt: number;
        downloadUrl: string;
    };
}
export interface Opportunity {
    id: string;
    name: string;
    headline: string;
    contact: string;
    emails: Array<string>;
    phones: Array<{
        value: string;
    }>;
    confidentiality?: string;
    location: string;
    links: Array<string>;
    createdAt: number;
    updatedAt?: number;
    lastInteractionAt: number;
    lastAdvancedAt: number;
    snoozedUntil: number;
    archivedAt: any;
    archiveReason: any;
    stage: string;
    stageChanges?: Array<{
        toStageId: string;
        toStageIndex: number;
        userId: string;
        updatedAt: number;
    }>;
    owner: string;
    tags: Array<string>;
    sources: Array<string>;
    origin: string;
    sourcedBy?: string;
    applications: Array<string>;
    resume: any;
    followers: Array<string>;
    urls?: {
        list: string;
        show: string;
    };
    dataProtection?: {
        store: {
            allowed: boolean;
            expiresAt: number;
        };
        contact: {
            allowed: boolean;
            expiresAt: any;
        };
    };
    isAnonymized?: boolean;
}
export interface Panel {
    id: string;
    applications: Array<string>;
    canceledAt: any;
    createdAt: number;
    end: number;
    externallyManaged: boolean;
    externalUrl: string;
    interviews: Array<{
        id: string;
        date: number;
        duration: number;
        feedbackReminder: string;
        feedbackTemplate: string;
        interviewers: Array<{
            email: string;
            id: string;
            name: string;
            feedbackTemplate: string;
        }>;
        location: string;
        note: string;
        subject: string;
    }>;
    note: string;
    stage: string;
    start: number;
    timezone: string;
    user: string;
}
export interface Posting {
    id: string;
    text: string;
    createdAt: number;
    updatedAt: number;
    user: string;
    owner: string;
    hiringManager: string;
    confidentiality?: string;
    categories: {
        team: string;
        department?: string;
        location: string;
        allLocations: Array<string>;
        commitment: string;
        level?: string;
    };
    content: {
        description: string;
        descriptionHtml: string;
        lists: Array<{
            text: string;
            content: string;
        }>;
        closing: string;
        closingHtml: string;
    };
    country?: string;
    tags: Array<any>;
    state: string;
    distributionChannels: Array<string>;
    reqCode?: string;
    requisitionCodes: Array<string>;
    salaryDescription: string;
    salaryDescriptionHtml: string;
    salaryRange: {
        max: number;
        min: number;
        currency: string;
        interval: string;
    };
    urls: {
        list: string;
        show: string;
        apply: string;
    };
    workplaceType: string;
}
export type ListResponse<T> = {
    data: T[];
    hasNext: false;
} | {
    data: T[];
    hasNext: true;
    next: string;
};
export type ListQuery = {
    limit?: number;
    offset?: number;
    expand?: string;
};
export type Response<T> = {
    data: T;
};
export type RetrieveApplicationParams = {
    opportunity: string;
    application: string;
};
export type RetrieveApplicationResponse = Response<Application>;
export declare const retrieveApplication: (apiKey: string, data: {
    params: RetrieveApplicationParams;
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<RetrieveApplicationResponse>;
export type ListApplicationsParams = {
    opportunity: string;
};
export type ListApplicationsResponse = ListResponse<Application>;
export declare const listApplications: (apiKey: string, data: {
    params: ListApplicationsParams;
    query?: ListQuery | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<ListApplicationsResponse>;
export type ApplyToPostingParams = {
    posting: string;
};
export type ApplyToPostingQuery = {
    send_confirmation_email?: 'true' | 'false';
};
export type ApplyToPostingBody = {
    customQuestions: Array<{
        id: string;
        fields: Array<{
            value: any;
        }>;
    }>;
    eeoResponses: {
        gender: string;
        race: string;
        veteran: string;
        disability: string;
        disabilitySignature: string;
        disabilitySignatureDate: string;
    };
    diversitySurvey?: {
        surveyId: string;
        candidateSelectedLocation: string;
        responses: Array<{
            questionId: string;
            questionText: string;
            questionType: string;
            answer: string;
        }>;
    };
    ipAddress?: string;
    source?: string;
    consent?: {
        marketing: boolean;
    };
    origin?: string;
    personalInformation?: Array<{
        name: string;
        value: string;
    }>;
    urls: Array<{
        name: string;
        value: string;
    }>;
};
export type ApplyToPostingResponse = Response<Application>;
export declare const applyToPosting: (apiKey: string, data: {
    params: ApplyToPostingParams;
    query?: ApplyToPostingQuery | undefined;
    body?: ApplyToPostingBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<ApplyToPostingResponse>;
export declare const createApplication: (apiKey: string, data: {
    params: ApplyToPostingParams;
    query?: ApplyToPostingQuery | undefined;
    body?: ApplyToPostingBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<ApplyToPostingResponse>;
export type RetrieveInterviewParams = {
    opportunity: string;
    interview: string;
};
export type RetrieveInterviewResponse = Response<Interview>;
export declare const retrieveInterview: (apiKey: string, data: {
    params: RetrieveInterviewParams;
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<RetrieveInterviewResponse>;
export type ListInterviewsParams = {
    opportunity: string;
};
export type ListInterviewsResponse = ListResponse<Interview>;
export declare const listInterviews: (apiKey: string, data: {
    params: ListInterviewsParams;
    query?: ListQuery | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<ListInterviewsResponse>;
export type CreateInterviewParams = {
    opportunity: string;
};
export type CreateInterviewQuery = {
    /**
     * Perform this create on behalf of a specified user. If unspecified, defaults to null.
     */
    perform_as?: string;
};
export type CreateInterviewBody = {
    panel: string;
    subject?: string;
    note?: string;
    interviewers: Array<{
        id: string;
        feedbackTemplate: string;
    }>;
    date: number;
    duration: number;
    location?: string;
    feedbackTemplate?: string;
    feedbackReminder?: string;
};
export type CreateInterviewResponse = Response<Interview>;
export declare const createInterview: (apiKey: string, data: {
    params: CreateInterviewParams;
    query?: CreateInterviewQuery | undefined;
    body?: CreateInterviewBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<CreateInterviewResponse>;
export type UpdateInterviewParams = {
    opportunity: string;
    interview: string;
};
export type UpdateInterviewQuery = CreateInterviewQuery;
export type UpdateInterviewBody = Partial<CreateInterviewBody>;
export type UpdateInterviewResponse = CreateInterviewResponse;
export declare const updateInterview: (apiKey: string, data: {
    params: UpdateInterviewParams;
    query?: {} | undefined;
    body?: Partial<CreateInterviewBody> | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<CreateInterviewResponse>;
export type DeleteInterviewParams = {
    opportunity: string;
    interview: string;
};
export type DeleteInterviewQuery = CreateInterviewQuery;
export declare const deleteInterview: (apiKey: string, data: {
    params: DeleteInterviewParams;
    query?: CreateInterviewQuery | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type RetrieveNoteParams = {
    opportunity: string;
    note: string;
};
export type RetrieveNoteResponse = Response<Note>;
export declare const retrieveNote: (apiKey: string, data: {
    params: RetrieveNoteParams;
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<RetrieveNoteResponse>;
export type ListNotesParams = {
    opportunity: string;
};
export type ListNotesResponse = ListResponse<Note>;
export declare const listNotes: (apiKey: string, data: {
    params: ListNotesParams;
    query?: ListQuery | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<ListNotesResponse>;
export type CreateNoteParams = {
    opportunity: string;
};
export type CreateNoteQuery = {
    /**
     * Perform this create on behalf of a specified user. If unspecified, defaults to null.
     */
    perform_as?: string;
    /**
     * Add a comment to an existing note of a specific opportunity. Comments must have a value, and can optionally take a createdAt timestamp
     */
    note_id?: string;
};
export type CreateNoteBody = {
    value: string;
    /**
     * If true, note will only be visible to users with Sensitive Information Privileges (SIP) for postings applied to candidate and users who have been @-mentioned. If unspecified, defaults to false.
     */
    secret?: boolean;
    /**
     * Score value is an integer between 1 and 4.
     * 1 - Strong No (double thumbs down)
     * 2 - No (single thumb down)
     * 3 - Yes (single thumb up)
     * 4 - Strong Yes (double thumbs up).
     * If unspecified, defaults to null.
     */
    score?: number;
    /**
     * If true, creation of this note will send notifications to all users following the candidate. If unspecified, defaults to false.
     */
    notifyFollowers?: boolean;
    /**
     * Timestamp in milliseconds
     */
    createdAt?: number;
};
export type CreateNoteResponse = Response<Note>;
export declare const createNote: (apiKey: string, data: {
    params: CreateNoteParams;
    query?: CreateNoteQuery | undefined;
    body?: CreateNoteBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<CreateNoteResponse>;
export type UpdateNoteParams = {
    opportunity: string;
    note: string;
};
export type UpdateNoteBody = {
    value: string[];
    user: string;
    secret?: boolean;
    createdAt?: number;
    completedAt?: number;
    score?: number;
};
export type UpdateNoteResponse = CreateNoteResponse;
export declare const updateNote: (apiKey: string, data: {
    params: UpdateNoteParams;
    query?: {} | undefined;
    body?: UpdateNoteBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<CreateNoteResponse>;
export type DeleteNoteParams = {
    opportunity: string;
    note: string;
};
export declare const deleteNote: (apiKey: string, data: {
    params: DeleteNoteParams;
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type RetrieveOpportunityParams = {
    opportunity: string;
};
export type RetrieveOpportunityResponse = Response<Opportunity>;
export declare const retrieveOpportunity: (apiKey: string, data: {
    params: RetrieveOpportunityParams;
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<RetrieveOpportunityResponse>;
export type ListOpportunitiesQuery = ListQuery & {
    include?: string;
    expand?: string;
    tag?: string;
    email?: string;
    origin?: string;
    source?: string;
    confidentiality?: string;
    stage_id?: string;
    posting_id?: string;
    archived_posting_id?: string;
    created_at_start?: number;
    created_at_end?: number;
    updated_at_start?: number;
    updated_at_end?: number;
    advanced_at_start?: number;
    advanced_at_end?: number;
    archived?: boolean;
    archive_reason_id?: string;
    snoozed?: boolean;
    contact_id?: string;
};
export type ListOpportunitiesResponse = ListResponse<Opportunity>;
export declare const listOpportunities: (apiKey: string, data: {
    params: {};
    query?: ListOpportunitiesQuery | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<ListOpportunitiesResponse>;
export type ListDeletedOpportunitiesQuery = {
    deleted_at_start?: number;
    deleted_at_end?: number;
};
export declare const listDeletedOpportunities: (apiKey: string, data: {
    params: {};
    query?: ListDeletedOpportunitiesQuery | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<ListOpportunitiesResponse>;
export type CreateOpportunityQuery = {
    perform_as: string;
    parse?: boolean;
    perform_as_posting_owner?: boolean;
};
export type CreateOpportunityBody = {
    /** Contact full name */
    name: string;
    /** Contact headline (e.g. companies or schools, or parsed from a resume) */
    headline: string;
    /**
     * Stage UID of this Opportunity’s current stage.
     * If omitted, defaults to the “New Lead” stage.
     */
    stage?: string;
    /** Contact current location */
    location: string;
    /** Optional contact phone number(s) */
    phones?: {
        /** The phone number (e.g. "(123) 456-7891") */
        value: string;
        /** One of: "mobile", "home", "work", "skype", "other" */
        type?: 'mobile' | 'home' | 'work' | 'skype' | 'other';
    }[];
    /** Contact email address(es) */
    emails: string[];
    /** Contact links (e.g. personal website, LinkedIn) */
    links: string[];
    /** Tags to apply to this Opportunity */
    tags: string[];
    /** Sources to apply to this Opportunity */
    sources: string[];
    /** How this Opportunity was added to Lever */
    origin: 'agency' | 'applied' | 'internal' | 'referred' | 'sourced' | 'university';
    /**
     * UID of the user who owns this Opportunity.
     * Defaults to the perform_as user if omitted.
     */
    owner?: string;
    /**
     * UIDs of users to add as followers on this Opportunity.
     * The creator is always added automatically.
     */
    followers?: string[];
    /** Resume file (binary). Only supported in multipart/form-data requests. */
    resumeFile?: File;
    /** Additional file(s) for this Opportunity. multipart/form-data only. */
    files?: File[];
    /**
     * Array of Posting UIDs.
     * ⚠️ Only one per request—send multiple requests to associate multiple postings.
     */
    postings: [string];
    /**
     * When the Opportunity was created (ms since epoch).
     * Use to import historical data; defaults to now if omitted.
     */
    createdAt?: number;
    /**
     * Archive metadata. If provided, archives the Opportunity on creation.
     * - `archivedAt` (ms since epoch): when it was archived (defaults to now if omitted)
     * - `reason`: UID of the archive reason (required)
     */
    archived?: {
        archivedAt?: number;
        reason: string;
    };
    /**
     * UID of an existing contact to link to this Opportunity.
     * If omitted, Lever will attempt to dedupe by the provided email(s).
     */
    contact?: string;
};
export type CreateOpportunityResponse = Response<Opportunity>;
export declare const createOpportunity: (apiKey: string, data: {
    params: {};
    query?: CreateOpportunityQuery | undefined;
    body?: CreateOpportunityBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<CreateOpportunityResponse>;
export type UpdateOpportunityStageParams = {
    opportunity: string;
};
export type UpdateOpportunityStageBody = {
    stage: string;
};
export declare const updateOpportunityStage: (apiKey: string, data: {
    params: UpdateOpportunityStageParams;
    query?: {} | undefined;
    body?: UpdateOpportunityStageBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type UpdateOpportunityArchivedStateParams = {
    opportunity: string;
};
export type UpdateOpportunityArchivedStateBody = {
    reason: string;
    cleanInterviews?: boolean;
    requisitionId?: string;
};
export declare const updateOpportunityArchivedState: (apiKey: string, data: {
    params: UpdateOpportunityArchivedStateParams;
    query?: {} | undefined;
    body?: UpdateOpportunityArchivedStateBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type AddOpportunityContactLinksParams = {
    opportunity: string;
};
export type AddOpportunityContactLinksBody = {
    links: string[];
};
export declare const addContactLinksByOpportunity: (apiKey: string, data: {
    params: AddOpportunityContactLinksParams;
    query?: {} | undefined;
    body?: AddOpportunityContactLinksBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type RemoveOpportunityContactLinksParams = AddOpportunityContactLinksParams;
export type RemoveOpportunityContactLinksBody = AddOpportunityContactLinksBody;
export declare const removeContactLinksByOpportunity: (apiKey: string, data: {
    params: AddOpportunityContactLinksParams;
    query?: {} | undefined;
    body?: AddOpportunityContactLinksBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type AddOpportunityTagsParams = {
    opportunity: string;
};
export type AddOpportunityTagsBody = {
    tags: string[];
};
export declare const addOpportunityTags: (apiKey: string, data: {
    params: AddOpportunityTagsParams;
    query?: {} | undefined;
    body?: AddOpportunityTagsBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type RemoveOpportunityTagsParams = AddOpportunityTagsParams;
export type RemoveOpportunityTagsBody = AddOpportunityTagsBody;
export declare const removeOpportunityTags: (apiKey: string, data: {
    params: AddOpportunityTagsParams;
    query?: {} | undefined;
    body?: AddOpportunityTagsBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type AddOpportunitySourcesParams = {
    opportunity: string;
};
export type AddOpportunitySourcesBody = {
    sources: string[];
};
export declare const addOpportunitySources: (apiKey: string, data: {
    params: AddOpportunitySourcesParams;
    query?: {} | undefined;
    body?: AddOpportunitySourcesBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type RemoveOpportunitySourcesParams = AddOpportunitySourcesParams;
export type RemoveOpportunitySourcesBody = AddOpportunitySourcesBody;
export declare const removeOpportunitySources: (apiKey: string, data: {
    params: AddOpportunitySourcesParams;
    query?: {} | undefined;
    body?: AddOpportunitySourcesBody | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export type GetStageParams = {
    stage: string;
};
export declare const getStage: (apiKey: string, data: {
    params: GetStageParams;
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export declare const getStages: (apiKey: string, data: {
    params: {};
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
export declare const getTags: (apiKey: string, data: {
    params: {};
    query?: {} | undefined;
    body?: {} | undefined;
}, init?: Omit<RequestInit, "body" | "method">) => Promise<{}>;
