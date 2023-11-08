# rfm-frontend-monorepo-ak

RFM - React Frontend Monorepo (with Atlaskit UI)

## Contents

- [About](#about)
- [Project's structure](#projects-structure)
- [Atomic Design](#atomic-design)
- [Code](#code)
  - [Example](#examples)
  - [Code styles and file names](#code-styles-and-file-names)
- [Git Lint and Convetional Commits](#git-lint-and-convetional-commits)
  - [Branches](#branches)
  - [Commits Commands](#commit-commands)
- [Running](#running)
  - [Commands](#commands)
  - [Ports](#ports)

## About

This project is a private and single repository which contain multiple distinct
projects, with well-defined relationships.

It's archteture, has been designed to share components, views (e.g. adminstarion
controllers), utilities, and many others stuffs between main applications (e.g.
Admin, WebApp etc.).

We also, control the versions on each project and, at the end, publish
independent builds at time as be requested.

More about where our filosofy come from and how we manage this project you can
see in [Monorepo Tools](https://monorepo.tools/) website (maintained by Nrwl's
team).

> Warning: As you need, get more information about how this project works with
> the main team. Do not modifying any structures whitout the team's consent.

## Project's structure

As we said, this project is a monorepo, what manage many repositories. In the
`/package` folder we have all the repository dependencies and apllications.

Let's see how its structure likes:

| Repository          | Reference name        | Information                                                                                     | Application's dependency |
| ------------------- | --------------------- | ----------------------------------------------------------------------------------------------- | ------------------------ |
| **Design system**   | `@rfm/design-system` | Design system for all applications and components                                               | YES                      |
| **Utilitiy**        | `@rfm/utility`       | Utilities for all applications and components                                                   | YES                      |
| **Data model**      | `@rfm/data-model`    | Domain (base entities) classes, interfaces and types for all applications and custom components | YES                      |
| **Services**        | `@rfm/services`      | Client side services api, external services and providers for all applications                 | YES                      |
| **Frontend Admin**  | `frontend-admin`     | Frontend admin application                                                                      | NO                       |
| **Frontend WebApp** | `frontend-webapp`    | Frontend web application                                                                        | NO                       |

And what each repository do:

**`@rfm/design-system`**

Provides a design system (e.g. components, async components, styles, themes,
colors and more) for all main applications. It's a peer dependency for many
repositories.

**`@rfm/utility`**

Repository for functional utitlities and helpers (e.g. converters, comparable
functions and more) for all main applications. It's a optional peer dependency.

**`@rfm/data-model`**

DTOs, infra and business classes, types and interfaces shared globaly (e.g.
databases, requests, responses types and more) for all main applications. It's a
peer dependency for many repositories.

**`@rfm/services`**

External api services and providers for all main applications. It's a peer
dependency for many repositories.

**`frontend-admin`**

Admin application.

**`frontend-webapp`**

Web application.

## Atomic design

We follow Atomic Design Methodology, by
[Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/), to design and
create and mantain our components in React.

1. **Atoms**: are the basic building blocks of matter. Applied to web
   interfaces, atoms are our HTML tags, such as a form label, an input or a
   button.
2. **Molecules**: are groups of atoms bonded together and are the smallest
   properties and serve as the backbone of our design systems.
3. **Organisms**: are groups of molecules joined together to form a relatively
   complex, distinct section of an interface.
4. **Templates**: consist mostly of groups of organisms stitched together to
   form pages. It’s here where we start to see the design coming together and
   start seeing things like layout in action.
5. **Pages**: are specific instances of templates. Here, placeholder content is
   replaced with real representative content to give an accurate depiction of
   what a user will ultimately see.

## Code

As you see, we have many repositories which has single reponsabilities. For
that, you can coding using these methodologies.

### Examples

Example of a page:

```ts
// packages/front-admin/src/pages/index.tsx

import React from 'react';

import { Box, Button } from '@rfm/design-system';

export default function HomePage() {

	return (
		<Box>
			<Button>Test button</Button>
		</Box>
	)
}
```

### Code styles and file names

We're using a code style to create and maintaining our components. So you must
follow this guide.

For any folder or file, the name must be in snake case (`some-like-that.tsx`).

A reusable component, must have the minimum structure:

```
|-components
	|-button
    |-__docs__
      |-appearence.stories.tsx
      |-button.stories.tsx
      |-example.mdx
		|-__tests__
			|-accessibillity.test.tsx
			|-analytics.test.tsx
			|-index.test.tsx
		|-button.tsx
		|-types.ts
		|-index.ts
```

Tests will depends by goal or usabillity.

## Git Lint and Convetional Commits

We've used git lint with conventional commits to establish a code base for any
developers and force a simple understanding.

### Branches

The branches must have the follow structure:

```
<type>/<task_number_link>-<short-slug-description>
```

Example:

**Hotfix**

- `hotfix/12001-payer-contacts-page`

**Bugfix**

- `bugfix/12002-payer-contacts-page`

**Featrue**

- `feature/12003-credentials-api-page`

**Test**

- `test/12004-credentials-api-page`

As you see, checking the branches we can see what it is make, and where it is
affected, and so on.

You can read more about conventional commits
[here](https://www.conventionalcommits.org/).

### Commits

In the same way, commits must have the follow structure:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Commands

To help us whith theses rules, we can run this simple commands to stage and
commit:

```sh
git add .
# run commit command to show cz ui
yarn commit
# and you see:
? Select the type of change that you're committing: (User arrows keys)
> feat:			A new feature
	fix: 			A bug fix
	docs:			Documentation only changes
	style:		Changes that do not affect the meaning of the code
	refactor: A code change that neither fixes a bug nor add a feature
	perf:			A code change that improves performance
	test:			Adding missing test or correcting existing code
(Move up and down to reveal more choices)
```

## Running

First of all, you must assert your dev environment to be able to run all
applications together. For that, you can set in your machine `hosts` file theses
lines:

```
# Applications
127.0.0.1 admin.localhost.com
127.0.0.1 webapp.localhost.com
```

Or you can run with a admin permission the script:

```sh
./scripts/dev-env.sh
```

> Warning: This is an important step to configurate your development
> environment.

> Important: The `.com` sufix in localhost applications must be in the scope to
> able coockies enhance.

### Commands

First of all, you need install `lerna` and `nx` packages globaly. It's necessary
to run all repos in this project.

```sh
# install lerna and nx
npm i -g lerna nx
```

**Installing**

Then, install the dependencies of project:

```sh
yarn
```

After that, you can check if `@rfm` packages was linked:

```sh
l -a node_modules/@rfm
```

Output must be like that:

```
data-model -> ../../packages/data-model
design-system -> ../../packages/design-system
utility -> ../../packages/utility
```

> **Important** If you get troubles, chat someone of team to help you.

**Applications**:

To run this project in development environment, you can set the app product name
like bellow:

`yarn dev-<product-name>`

And, product names are:

- `admin`
- `webapp`

Example:

```sh
# run Admin application
# this command will "run lerna run dev --scope=front-admin"
# wich will run "next dev -H admin.localhost.com -p 5001"
yarn dev:admin
```

See `package.json` root file to get all commands.

## Ports

Also ports are very important in development environment. So, we automatic set
each port in applications:

> **Important:** To run this project on `development` mode, do not change this
> environments variables:

| Product name        | Host                   | Port |
| ------------------- | ---------------------- | ---- |
| **Admin**           | `fahzadmin.localhost`  | 5001 |
| **Web application** | `fahzwebapp.localhost` | 5002 |
