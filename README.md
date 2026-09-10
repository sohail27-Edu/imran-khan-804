Imran Khan Jail Time Counter
A responsive live counter showing elapsed time since 5 August 2023.
Files
index.html - page structure
style.css - green/red glassmorphism design
script.js - live calendar counter + local love counter
images/imran-khan.png - supplied background image
Important
The code currently uses 2023-08-05 12:59:00 PKT as the working timestamp because public reports establish the arrest as shortly after the 12:30 PM verdict but do not provide one consistently published exact arrest second.
The Love button currently stores clicks in the visitor's browser using localStorage. That means it is not yet a shared global count.
For a public shared counter, connect the button to Firebase Firestore or another backend and replace the localStorage section in script.js.
GitHub Pages
Upload the files to a repository, keeping the folder structure intact:
index.html style.css script.js images/imran-khan.png
Then enable GitHub Pages from Settings > Pages and deploy from the main branch.
