## INNERVE'25

##### Innerve'25 is an Intercollege Technical Fest organized by the Department of Computer Science & Engineering, College of Engineering Muttathara. It serves as a platform for students, and tech enthusiasts to compete, collaborate, and showcase their expertise through coding challenges, hackathons, workshops, and more.

#### Installation

##### Prerequisites

- Node.js and npm installed on your machine

##### Steps

1. Clone the Repository

```bash
git clone https://github.com/NayanUnni95/InnerveCodiac.git
cd InnerveCodiac
```

2. Install Dependencies

###### Install the required dependencies using npm

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

###### This will start the development server and open the app in your default web browser.

### Developer Commands

###### Prettier

```bash
npm run format
```

###### Preview

```bash
npm run preview
```

###### Production Build

```bash
npm run build
```

###### Run Production Build

```bash
npm install -g http-server;
http-server dist
```

> **P.S**: If you have `docker` installed in your system, you can follow these steps to set up the environment:
>
> 1. After forking and cloning the repo(as mentioned above), get into the project directory:
>
> ```bash
> cd InnerveCodiac/
> ```

<!-- > 2. Pull the image from docker hub:
>
> ```bash
> docker pull
> ``` -->

> 2. Start the docker container with:
>
> ```bash
> docker compose up
> ```
>
> 3. Now start adding your changes.
>    **Note:** You don't need to restart the container again and again after starting it once, because the changes you make will reflect in the container instantly.
