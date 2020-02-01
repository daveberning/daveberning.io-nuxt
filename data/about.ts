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
  almaMaterLogo: `/images/university-of-cincinnati-vector-logo.svg`,
  companyLogo: `/images/oodle-logo.svg`,
  twitterHandle: `@daveberning`,
  bio: `<p>Hi, I'm Dave Berning, a web developer and author from Cincinnati. Yeah, <em>the</em> Queen City, where we smother spaghetti with chili and say things like "ope" and "I'm gonna squeeze right by ya." Anyway...</p>

<p>I've been a front-end web developer for more than ${years()} years. In 2015, I graduated from the University of Cincinnati, where I learned to create interactive websites with HTML, CSS, and JavaScript. Currently, I build rich single-page web applications with Vue.js and TypeScript. When I'm not coding, I try to give back to the community where I can. Recently, it's through writing tutorials at <a href="https://alligator.io/author/dave-berning">Alligator.io</a> and speaking as the founder/co-organizer at the <a href="https://www.meetup.com/CodePen-Cincinnati/">CodePen Cincinnati meetups</a>. You can find me almost anywhere on the World Wide Web as <a href="https://twitter.com/daveberning">@daveberning</a>.</p>

  <p>Over the years, I've worked with several companies and organizations, each one providing me valuable experience and new skills. Some of these companies include Kroger Wireless, Hobsons Educational Solutions, Oodle, and Drees Homes. In 2018, I became a published author with Bleeding Edge Press. I currently have two publishing credits: <em><a href="https://www.amazon.com/Vue-Js-Understanding-Its-Tools-Ecosystem/dp/9388425022">Vue.js: Understanding It's Tools and Ecosystem</a></em> (author) and <em><a href="https://www.amazon.com/Creating-Interfaces-Bulma-Jeremy-Thomas-ebook/dp/B079M1BJG4/ref=sr_1_1?keywords=creating+interfaces+with+bulma&qid=1566873504&s=books&sr=1-1">Creating Interfaces With Bulma</a></em> (co-author, co-editor). Go and tell your mom to buy my books, that's how I make money.</p>`
}
