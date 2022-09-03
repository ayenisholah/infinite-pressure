import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import header from '../../public/images/banners/about-header.jpg';
import RainbowHeader from '../components/common/RainbowHeader';

const About: NextPage = () => (
  <>
    <Head>
      <title>Infinite Pressure - About</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="" />
    </Head>
    <div className="container mx-auto  text-lg mb-32 font-light">
      <div className="w-full">
        <Image src={header} layout="responsive" placeholder="blur" />
      </div>
      <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 mt-8 text-sm">
        <div className="flex-1 space-y-4">
          <RainbowHeader className="text-center text-2xl  pixel-font" text="Infinite Pressure" />
          <p>
            INFINITE PRESSURE is a project I began in March of 2021 that is rooted in my photography, although you likely wouldn&apos;t know this by looking at the work. Photos are essentially blown
            to bits in Adobe Illustrator, converted from pixel-based images, or rasters, to math-based forms, or vectors, providing me with thousands of tiny, infinitely scalable shapes. These shapes
            are my ingredients, an immense, chaotic pile of shredded pixels. Shapes are then blended along hand-drawn bezier curves on my trackpad or Wacom tablet, forming completely new arrangements
            unrecognizable from the source material. These steps are repeated, new paths are drawn, shapes, colors, and sizes are rearranged, Illustrator crashes, I lose the work or was lucky enough
            to save just in time, go to bed, start again in the morning, and so on, until the work tells me it&apos;s finished. Pieces range from organized and serene to complete and total havoc.
            Maximal compositions emerge that are objectively random yet decidedly human.
          </p>

          <p>
            Color plays an important role, sometimes muted or monochromatic to soften an otherwise hectic piece, other times displaying a full spectrum that purposefully adds to the noise. Inky
            porcelain blues, obsidian triple-black, rainbows on rainbows; virtually every palette I could think of is present somewhere within the collection.
          </p>

          <p>
            The final result, thousands of hours of creative experimentation spanning roughly a year, is a body of 99 artworks presented as a collection of NFTs. This book is a supplement to that; a
            selection of finished works as well as a close, behind-the-scenes look at my practice to add further context and bring the viewer along for the ride, inviting you to look over my shoulder
            while I work.
          </p>
        </div>
        <div className="flex-1 space-y-4">
          <RainbowHeader className="text-center text-2xl  pixel-font" text="Nopattern Studio" />
          <p>
            Established in 2004 at the age of 18, NoPattern Studio is the Chicago-based practice of self-taught artist &amp; designer Chuck Anderson. His work has become well-known for its surreal use
            of color & light, pioneering juxtapositions of traditional & digital mediums, and endless experimentation.
          </p>

          <p>
            In 2010 at age 25 he was named a &apos;Design Icon&apos; by Computer Arts Magazine. Now 36, Anderson&apos;s client list includes ESPN, Apple, Nike, Microsoft New York Times, Vans, Target,
            Burton, and the Chicago Bulls, among others.
          </p>

          <p>
            Chuck has been a pioneering and well-respected voice of creative and internet culture since the early 2000s. As one of the founders of early internet blog THE BRILLIANCE! alongside
            designer Benjamin Edgar and the late Virgil Abloh, Chuck has been championing all things creative for nearly two decades.
          </p>

          <p>
            With the advent of NFTs in late 2020, Chuck began to shift his focus away from commercial work and onto his own creative practice. INFINITE PRESSURE is the largest and most complete body
            of work in his career, and the works & collaborations you see here are just the beginning.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-10 md:flex-row md:space-x-10 md:space-y-0 mt-8 text-sm">
        <div className="flex-1 space-y-4">
          <RainbowHeader className="text-center text-2xl  pixel-font" text="Chain/Saw" />
          <p>
            Launched in March 2021, Chain/Saw is an artist founded NFT platform focused on intimate artist collaborations and boutique microsite experiences Chain/Saw is a space for artists and
            collectors to both create and experiment with a new digital art paradigm, and ultimately shape it.
          </p>

          <p>
            As an NFT marketplace, Chain/Saw presents a curated selection of visionary projects that call into question what blockchain art can be. Chain/Saw was founded by Frank Musarra, an artist,
            musician, and creative technologist deeply embedded at the intersection of art and technology. The project arose through conversations with peers who shared a common curiosity with this
            emergent space, though with this curiosity comes trepidation — what does the future of NFT art look like? What are the implications of this movement for &quot;legacy&quot; art worlds?
            Chain/Saw was founded to further the challenging conversation surrounding the future of digital art, engaging a community of artists, inspired collectors, and curious audiences alike.
          </p>
          <p>Chain/Saw has worked with artists such as Matt Furie, Claudia Mate, Ryder Ripps, Itzel Yard, Christian Rex Van Minnen, Jennifer Juniper Stratford & Geneva Jacuzzi</p>
        </div>
        <div className="flex-1">
          <RainbowHeader className="text-center text-2xl  pixel-font" text="Contact" />
          <div className="flex flex-col sm:flex-row justify-between px-10 mt-10">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="pixel-font text-2xl">NOPATTERN:</h2>
              <p className="text-lg">STUDIO@NOPATTERN.COM</p>
            </div>
            <div className="flex flex-col items-center space-y-8">
              <h2 className="pixel-font text-2xl">Chain/Saw:</h2>
              <p className="text-lg">CHAINSAW@CHAINSAW.FUN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;
