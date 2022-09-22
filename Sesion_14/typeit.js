//Texto animado: https://www.typeitjs.com/

// new TypeIt("#greeting", {
//    strings: "Hello",
//    speed: 50,
//    waitUntilVisible: true,
//}).go();



new TypeIt("#hero", {
    strings: `
        <span class="greeting">Welcome</span>
        <span class= "name">MARLON GARCIA</span> <br>
        <span class="messageClick">Click on the button to continue</span> `,
    speed: 50,
    waitUntilVisible: true,
}).go();