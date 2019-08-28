import {About} from '@/types'
// @ts-ignore
import numberToWords from 'number-to-words'

function years(): string {
  const yearsDevelopment: number = new Date().getFullYear() - 2012
  return numberToWords.toWords(yearsDevelopment)
}

export const about: About = {
  firstName: 'Dave',
  lastName: 'Berning',
  role: 'Developer & Author',
  city: 'Cincinnati',
  state: 'Ohio',
  almaMaterLogo: `images/university-of-cincinnati-vector-logo.svg`,
  companyLogo: `images/oodle-logo.svg`,
  twitterHandle: `@daveberning`,
  bio: `<p>Dave Berning has been a front-end web developer for more than ${years()} years. He graduated from the
University of Cincinnati where he learned to create interactive websites with HTML, CSS, and JavaScript. Dave
currently builds rich single-page and progressive web applications with Vue.js and TypeScript. He is also a writer for Alligator.io and
organizer of the CodePen Cincinnati meetups where he lectures and leads workshops about the latest
technologies in the
field. You can find him almost anywhere on the World Wide Web as @daveberning.</p>

<p>He has worked with several companies over the years, each one giving him valuable experience and new skills.
Some of these companies include KalioCommerce, Hobsons Educational Solutions, Oodle, and Drees Homes. In 2018, Dave became a published author with Bleeding Edge Press where he authored and co-edited two books: <em>Vue.js: Understanding It's Tools and Ecosystem</em> and <em>Creating Interfaces With Bulma</em>.</p>`
}
