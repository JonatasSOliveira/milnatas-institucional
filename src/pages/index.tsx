import * as React from "react"
import "normalize.css"
import type { HeadFC, PageProps } from "gatsby"
import DefaultContainer from "../components/DefaultContainer"
import LinkContainer from "../components/LinkContainer"

const urlWhatsapp = "https://wa.me//554497522661?text=Ol%C3%A1%21%0A%0AVim%20pelo%20Instagram%20e%20fiquei%20interessado%28a%29%20sobre%20os%20doces%2C%20poderia%20me%20fornecer%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20sabores%20e%20pre%C3%A7os%3F"

const IndexPage: React.FC<PageProps> = () => {
  return (
   <DefaultContainer>
      <h1>Milnatas</h1>
      <LinkContainer url={urlWhatsapp} message="Entre em contato!"></LinkContainer>
   </DefaultContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Milnatas</title>
