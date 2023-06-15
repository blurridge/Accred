# Accred - An Event E-Certificate Generator Web App 🎖️

![Accred Logo](https://i.imgur.com/gKwYMID.png)

## Context

I developed Accred as a side project due to the struggles I faced in managing e-certificate generation for the Google Developer Student Clubs at the University of San Carlos. Our existing process of generating and storing certificates in our drive was time-consuming and required constant work from the core team. Additionally, it was taking up a significant amount of storage space.

To overcome these challenges, I created Accred to automate the certificate generation process and eliminate the need for storing them in the cloud. My app generated certificates on-demand, ensuring that no unnecessary data was stored and saving valuable storage space.

Additionally, developing Accred served as an opportunity for me to gain hands-on experience and enhance my knowledge of Next.js and its app router. Throughout the development process, I delved into the intricacies of Next.js, leveraging its powerful features to create a seamless and efficient user experience.

By working on Accred, I not only addressed the pressing issue of e-certificate management but also utilized it as a practical learning experience. Exploring the capabilities of Next.js and its app router allowed me to expand my skill set and deepen my understanding of web development frameworks. This project served as a valuable stepping stone in my journey to becoming a proficient developer, providing me with practical insights and expertise that I can apply to future projects.

## Tech Stack

**Client:**

<p> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" alt="next.js" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> </p>

**Server:**

<p><a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> </p>

## Screenshots

![Admin Page](https://i.imgur.com/xGOdUq9.png)
![Add Event Modal](https://i.imgur.com/Nf2vfAr.png)
![Event Page](https://i.imgur.com/VOlzLUU.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/blurridge/Accred
```

Go to the project's directory

```bash
  cd Accred/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Structure

```
📦 
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ app
│  ├─ admin
│  │  ├─ docs
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ home
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ event
│  │  └─ [id]
│  │     ├─ layout.tsx
│  │     └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ assets
│  ├─ accred_logo.svg
│  ├─ accred_ls.svg
│  ├─ accred_sq.svg
│  └─ gdsc_logo.png
├─ components
│  ├─ AddEvent.tsx
│  ├─ AdminLoginButton.tsx
│  ├─ Certificate.tsx
│  ├─ DataTable.tsx
│  ├─ EventCard.tsx
│  ├─ EventCardContent.tsx
│  ├─ EventDropdown.tsx
│  ├─ EventForm.tsx
│  ├─ Footer.tsx
│  ├─ GuestLoginButton.tsx
│  ├─ LoginCard.tsx
│  ├─ Navbar.tsx
│  ├─ RingLoader.tsx
│  └─ ui
│     ├─ avatar.tsx
│     ├─ button.tsx
│     ├─ calendar.tsx
│     ├─ card.tsx
│     ├─ columns.tsx
│     ├─ dialog.tsx
│     ├─ dropdown-menu.tsx
│     ├─ form.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ navigation-menu.tsx
│     ├─ popover.tsx
│     └─ table.tsx
├─ context
│  ├─ AuthContext.tsx
│  ├─ EventDataContext.tsx
│  └─ ThemeContext.tsx
├─ firebase
│  └─ config.ts
├─ lib
│  └─ utils.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ tailwind.config.js
├─ tsconfig.json
└─ utils
   ├─ compressBanner.ts
   ├─ deleteFromFirebase.ts
   ├─ fetchImageSize.ts
   ├─ generateLinkedInShareURL.ts
   ├─ parseCSV.ts
   ├─ uploadToFirestore.ts
   └─ uploadToStorage.ts
```
