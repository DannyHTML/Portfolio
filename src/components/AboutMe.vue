<template>
  <div class="bg-primary pt-20 pb-10 md:py-20">
    <div class="container">
      <h2 id="about" class="mb-10 text-center text-5xl font-bold">About Me</h2>
      <div class="md:flex md:gap-20">
        <div class="flex flex-1 items-center justify-center">
          <div class="border-medium-purple relative rounded-full border-2">
            <!-- TODO: Maybe a bit bigger on desktop? -->
            <img
              src="../assets/danny.jpg"
              alt="Picture of Danny Jager"
              class="h-96 rounded-full object-cover p-5 xl:h-[500px]"
            />
            <span>
              <img
                src="../assets/vue-logo.svg"
                alt="Vue logo"
                class="absolute top-12 right-0 w-12 rotate-20 xl:right-5"
              />
            </span>
            <span>
              <img
                src="../assets/tailwind-logo.svg"
                alt="Tailwind logo"
                class="absolute top-12 left-0 w-12 xl:left-5"
              />
            </span>
            <span>
              <img
                src="../assets/pinia-logo.svg"
                alt="Pinia logo"
                class="absolute right-0 bottom-10 w-12 -rotate-2 xl:right-3"
              />
            </span>
            <span>
              <img
                src="../assets/html-5-logo.svg"
                alt="HTML logo"
                class="absolute bottom-0 left-9 w-12 -rotate-20 xl:left-16"
              />
            </span>
            <span>
              <img
                src="../assets/css-3-logo.svg"
                alt="CSS logo"
                class="absolute -top-8 right-1/2 w-12 translate-x-1/2 rotate-12"
              />
            </span>
            <span>
              <img
                src="../assets/javascript-logo.svg"
                alt="JavaScript logo"
                class="absolute right-1/2 -bottom-8 w-12 translate-x-1/2 rotate-12"
              />
            </span>
          </div>
        </div>
        <!-- About me text -->
        <!-- TODO: Write a bit more about myself here. Why I moved to the UK. Because of family ofcrouse -->
        <!-- TODO: but that will make it more personal -->
        <div class="mt-14 flex-1 md:mt-0">
          <p>
            I’m a front-end developer with a strong focus on building clean, scalable, and
            user-friendly web experiences. Originally self-taught, I later completed a
            government-funded Front-End Development program in the Netherlands through
            <a
              href="https://hacklab.frl/stacks/front-end-development"
              class="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              >Hacklab.frl</a
            >, which gave me a solid foundation and helped refine my development approach. I’ve been
            living in the UK since October 2025, where I continue to grow both personally and
            professionally. <br /><br />
            After completing my training, I joined CanvasCompany.nl B.V. as a Front-End Developer.
            CanvasCompany.nl B.V. is a company that handles everything in-house—from production to
            marketing to IT—which gave me the opportunity to work closely with multiple teams and
            contribute directly to business goals. <br /><br />
            Within the IT team, I focused primarily on developing and maintaining more than 25
            multilingual e-commerce websites built on Magento 2 and powered by PrismicIO as a
            headless CMS. My responsibilities included translating Figma designs into fully
            responsive interfaces, collaborating with marketing to evaluate feasibility and
            timelines, and proposing my own ideas to improve usability and performance.
          </p>
          <div class="mt-2 flex justify-end">
            <!-- TODO: Upload my CV for this component -->
            <DownloadButton download-file-name="Danny_Jager_CV.pdf"> Download CV </DownloadButton>
          </div>
        </div>
      </div>
      <div class="mt-5 lg:mt-14">
        <p>
          A large part of my work involved building reusable Prismic slices and custom types so
          teams like Marketing and Sales could manage content efficiently without developer
          involvement. I also worked on the integration layer between Magento 2 and PrismicIO using
          PHTML, CSS/Tailwind, XML, and Alpine.js, and implemented front-end features in both
          Magento 1 and Magento 2 when appropriate.
          <b class="my-4 block"> Some examples of my work include: </b>
        </p>
        <ul>
          <li class="list-inside list-disc">
            <a
              href="https://www.topdoek.nl/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 underline"
              >Topdoek.nl</a
            >
            – Created various reusable slices in Prismic that allowed Marketing to control design
            and feature toggles.
          </li>
          <li class="list-inside list-disc">
            <a
              href="https://www.noboringsuitcases.de/geschaftlich-nbs"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 underline"
              >NoBoringSuitcases.de</a
            >
            /
            <a
              href="https://www.noboringsuitcases.nl/zakelijk-nbs"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500 underline"
              >NoBoringSuitcases.nl</a
            >
            – Developed custom Prismic types for the Sales team, turning their design and content
            requirements into flexible, easy-to-use components.
          </li>
        </ul>
        <br />
        <p>
          I enjoy transforming ideas into functional, maintainable interfaces, collaborating across
          teams, and building systems that are as enjoyable to work with as they are to use.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DownloadButton from './DownloadButton.vue';
</script>
