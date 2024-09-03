import React from "react";

export default function GetProjects() {
  let projects = [
    {
      title: "Yalgamers",
      host_co: "Yalgamers",
      url: "https://yalgamers.gg/",
      image: "yalgamers.png",
      description: `<ul>
          <li>At Yalgamers, a gaming website specializing in NFT games.</li>
          <li>I enhanced the front-end layouts using Svelte Kit, improving the overall user experience.</li>
          <li>The website offers courses on NFT games, organizes tournaments, features its own browser games, and utilizes an XP system for prize distribution.</li>
          <li>My work focused on refining these elements to provide users with a more engaging and functional platform.</li>
          <li>By implementing complex functionalities with SvelteKit and PocketBase contributed to a seamless, interactive gaming experience tailored to the needs of the gaming community.</li>
          </ul>`,
      stack: ["SvelteKit", "PocketBase", "HTML", "CSS", "JavaScript", "PHP", "Tailwind"],
    },
    {
      title: "Habibi",
      host_co: "Habibi",
      url: "https://landing.habb.finance/",
      image: "habibi.png",
      description: `<ul>
          <li>I built Habibi Finance from the scratch, using Laravel for backend and React for the frontend.</li>
          <li>This project introduces a landing page and launchpad for the "Habibi" cryptocurrency, integrating Web3.js to allow users to stake and unstack their currency on the blockchain.</li>
          <li>By staking Habibi, users gain tiers that enable them to invest in projects and earn returns.</li>
          <li>This work showcases my ability to combine web development with blockchain technology to create innovative financial solutions.</li>
          </ul>`,
      stack: ["Laravel", "ReactJs", "HTML", "CSS", "JavaScript", "Web3", "PHP", "Tailwind"],
    },
    {
      title: "midar.net",
      host_co: "Aratech",
      url: "https://midar.net/",
      image: "midar.png",
      description: `<ul>
          <li>I created Midar, a news website with an intuitive and visually appealing design.</li>
          <li>It's built with the Laravel framework and a custom front-end using Tailwind CSS.</li>
          <li>I prioritized simplicity and user-friendliness, making news browsing easy and enjoyable.</li>
          </ul>`,
      stack: ["Laravel", "HTML", "CSS", "JavaScript", "PHP", "Tailwind"],
    },
    {
      title: "Santechture",
      host_co: "Aratech",
      url: "https://santechture.com/",
      image: "santechture.png",
      description: `<ul>
          <li>For Santechture, a healthcare website, I built everything from scratch with WordPress.</li>
          <li>I designed the frontend to be clear and easy to navigate, and I also customized the WordPress dashboard for better site management.</li>
          </ul>`,
      stack: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "World Padel Tour",
      host_co: "Aratech",
      url: "https://abudhabipadelmaster.com/",
      image: "WPT.png",
      description: `<ul>
          <li>For the World Padel Tour's Arabic version.</li>
          <li>I developed the website in Laravel based on the client's design and added a multi-language option.</li>
          <li>This allowed us to cater to a wider audience.</li>
          </ul>`,
      stack: ["Laravel", "HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "Pangea Properties",
      host_co: "Aratech",
      url: "https://pangeadubai.com/",
      image: "pangea.png",
      description: `<ul>
          <li>For Pangea Properties, I built a real estate website from scratch using WordPress.</li>
          <li>I designed the front-end to be user-friendly for people searching for homes and customized the WordPress dashboard to make it easier for site admins to manage listings.</li>
          </ul>`,
      stack: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "SheOwnIt",
      host_co: "Aratech",
      url: "https://sheownit.com/",
      image: "SheOwnIt.png",
      description: `<ul>
          <li>I revamped a dress gallery site on OpenCart, giving it a fresh and improved look.</li>
          <li>I enhanced both the user interface and backend, making it more user-friendly and visually pleasing. To cater to a global audience.</li>
          <li>I added a multi-language feature, demonstrating my skills in enhancing website accessibility and user experience.</li>
          </ul>`,
      stack: ["OpenCart", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "MeBrokers",
      host_co: "Aratech",
      url: "https://mebrokers.net/",
      image: "mebrokers.png",
      description: `<p>At Me Brokers, an insurance website, I upgraded the front-end for better usability and aesthetics, and I also made improvements to the database for enhanced performance.</p>`,
      stack: ["OpenCart", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Amuesly",
      host_co: "Aratech",
      url: "https://amuesly.com/",
      image: "amuesly.png",
      description: `<ul>
          <li>Amuesly, a healthy food website, was developed on Shopify with the design provided by the client.</li>
          <li>I executed the client's design on Shopify, demonstrating my skill in adapting to specific design requirements and using Shopify to create an engaging and easy-to-navigate website focused on promoting healthy eating.</li>
          </ul>`,
      stack: ["Shopify", "HTML", "CSS", "JavaScript"],
    },
  ];
  return projects;
}
