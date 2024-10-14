# Accred - An Event E-Certificate Generator Web App 🎖️

![Accred Logo](https://i.imgur.com/gKwYMID.png)
![Commit Shield](https://img.shields.io/github/last-commit/blurridge/Accred?style=for-the-badge)
![License](https://img.shields.io/github/license/blurridge/Accred?style=for-the-badge)
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
![Certificate Verification Page](https://i.imgur.com/2agmPCl.png)

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

Create a `.env` file containing your Firebase variables. Use `.env.example` as a template.
```
NEXT_PUBLIC_FIREBASE_API_KEY              = <<your firebase api key here>>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN          = <<your firebase auth domain here>>
NEXT_PUBLIC_FIREBASE_PROJECT_ID           = <<your firebase project id here>>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET       = <<your firebase storage bucket here>>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID  = <<your firebase messaging sender id here>>
NEXT_PUBLIC_FIREBASE_APP_ID               = <<your firebase app id here>>
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID       = <<your firebase measurement id here>>
```

After setting up Firebase, make sure to create an `admins` collection on Firestore and create a record for each admin you want added. A document should look like this:
```
email: example@gmail.com
```

Start the server

```bash
  npm run dev
```

## Structure

```
📦 
├─ .env.example
├─ .eslintrc.json
├─ .gitignore
├─ LICENSE
├─ README.md
├─ app
│  ├─ admin
│  │  ├─ home
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ contact
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ docs
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ event
│  │  └─ [id]
│  │     ├─ certificate
│  │     │  └─ [certId]
│  │     │     └─ page.tsx
│  │     ├─ layout.tsx
│  │     └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ mdx-components.tsx
│  └─ page.tsx
├─ assets
│  ├─ accred_logo.svg
│  ├─ accred_ls.svg
│  ├─ accred_sq.svg
│  └─ gdsc_logo.png
├─ components
│  ├─ AddEvent.tsx
│  ├─ AdminGuide.mdx
│  ├─ AdminLoginButton.tsx
│  ├─ Certificate.tsx
│  ├─ CertificateVerifier.tsx
│  ├─ ContactMe.mdx
│  ├─ DataTable.tsx
│  ├─ EventCard.tsx
│  ├─ EventCardContent.tsx
│  ├─ EventDropdown.tsx
│  ├─ EventForm.tsx
│  ├─ FeatureCards.tsx
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

## Acknowledgements

I would like to acknowledge the work of [Ned Palacios](https://github.com/nedpals) and [GDSC University of Immaculate Conception](https://github.com/gdsc-uic) as the inspiration for this project's concept of certificate generation which was originally done in Vue for [LAWIG - a GDSC Philippines Info Session](https://github.com/gdsc-uic/lawig-cert-gen).

## Stay in touch

If you have any questions, suggestions, need further assistance, or would like to avail of Accred for your organization, feel free to reach out to me. I'm always happy to help!

- Email: [zachriane01@gmail.com](mailto:zachriane01@gmail.com)
- GitHub: [@blurridge](https://github.com/blurridge)
- Twitter: [@zachahalol](https://twitter.com/zachahalol)
- Instagram: [@zachahalol](https://www.instagram.com/zachahalol)
- LinkedIn: [Zach Riane Machacon](https://www.linkedin.com/in/zachriane)

## Contributors
<a href="https://github.com/blurridge/accred/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=blurridge/accred" />
</a>
