# lever-js

**lever-js** is a lightweight, strongly-typed TypeScript client for the Lever Recruiting API. It provides out-of-the-box endpoint functions, built-in Basic Auth, and full type safety—no runtime URL builders or manual fetch calls required.

Disclaimer: This is not an official Lever product. It is a community-driven open-source project. This README was generated with ChatGPT 04-mini-high.

---

## 🚀 Installation

Install via npm or yarn:

```bash
npm install lever-js
# or
yarn add lever-js
# or
pnpm add lever-js
```

## 📦 Package Contents

- **`ROOT`**: Base URL (`https://api.lever.co/v1`)
- **Endpoint functions**: Predefined functions like `listApplications`, `retrieveOpportunity`, `createOpportunity`, etc.
- **Core types**:
  - `HttpMethod`
  - `ListQuery`
  - `ListResponse<T>`
  - `Response<T>`
  - Resource interfaces (`Application`, `Opportunity`, `Interview`, etc.)

> 🔒 **Note:** The internal `createEndpoint` factory is **not** exposed—only the curated endpoint functions are available for import.

---

## 🔑 Authentication

All endpoint functions accept your API key as the first argument and handle Basic Auth for you:

```ts
const apiKey = 'your-lever-api-key';
```

---

## 📋 Usage

Import just the functions and types you need:

```ts
import {
	listApplications,
	retrieveApplication,
	createOpportunity,
	type ListQuery,
	type ListResponse,
	type Application,
	type Opportunity,
} from 'lever-js';
```

### Listing Applications

```ts
async function fetchAllApplications(apiKey: string, oppId: string) {
	const response = await listApplications(apiKey, {
		params: { opportunity: oppId },
		query: { limit: 50 },
	});

	console.log(response.data); // Application[]
	if (response.hasNext) {
		console.log('Next cursor:', response.next);
	}
}
```

### Retrieving a Single Application

```ts
async function getApplication(apiKey: string, oppId: string, appId: string) {
	const response = await retrieveApplication(apiKey, {
		params: { opportunity: oppId, application: appId },
	});
	console.log(response.data); // Application
}
```

### Creating an Opportunity

```ts
import {
	createOpportunity,
	type CreateOpportunityBody,
	type Response,
	type Opportunity,
} from 'lever-js';

async function newOpportunity(apiKey: string) {
	const body: CreateOpportunityBody = {
		name: 'Jane Doe',
		headline: 'Acme Corp, University of XYZ',
		location: 'San Francisco, CA',
		emails: ['jane.doe@example.com'],
		links: ['https://linkedin.com/in/janedoe'],
		tags: ['Marketing', 'Remote'],
		sources: ['linkedin'],
		origin: 'sourced',
		postings: ['f2f01e16-27f8-4711-a728-7d49499795a0'],
	};

	const resp = await createOpportunity(apiKey, {
		params: {},
		query: { perform_as: 'user-id' },
		body,
	});
	console.log('Created ID:', (resp as Response<Opportunity>).data.id);
}
```

---

## 🛠️ Available Endpoints

Below is a non-exhaustive list of what’s exposed. For full coverage, check the package’s TypeScript definitions.

- **Applications**: `listApplications`, `retrieveApplication`, `createApplication` (alias for `applyToPosting`)
- **Opportunities**: `listOpportunities`, `retrieveOpportunity`, `createOpportunity`, `updateOpportunityStage`, `updateOpportunityArchivedState`, `addContactLinksByOpportunity`, `removeContactLinksByOpportunity`, `addOpportunityTags`, `removeOpportunityTags`, `addOpportunitySources`, `removeOpportunitySources`
- **Interviews**: `listInterviews`, `retrieveInterview`, `createInterview`, `updateInterview`, `deleteInterview`
- **Notes**: `listNotes`, `retrieveNote`, `createNote`, `updateNote`, `deleteNote`
- **Panels / Meta**: `getStages`, `getStage`, `getTags`

...and more!

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/XYZ`)
3. Commit your changes (`git commit -m 'feat: add ...'`)
4. Push to the branch (`git push origin feature/XYZ`)
5. Open a Pull Request

We welcome additions like new endpoint definitions, bug fixes, and improved types!

---

## 👤 Author

**Isaac Smith**

- Website: https://torchmedia.ca/
- GitHub: [@isaacsmith](https://github.com/torchsmith)

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

---
