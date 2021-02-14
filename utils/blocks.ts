import { welcome_banner_template, WelcomeBanner } from '../components/WelcomeBanner'
import { ImageAndContent, imageAndContent_template } from '../components/ImageAndContent'
import { TextContent, textContent_template } from '../components/TextContent'
import { image_template, ImageBlock } from '../components/ImageBlock'
import { ImageCard, imageCard_template } from '../components/largeImageCard'
import { Partners, partners_template } from '../components/Partners'
import { ImageAndText, imageAndText_template } from '../components/ImageAndTextComponent'
import { LatestInsights, latestInsights_template } from '../components/LastestInsights'
import { Supporting, supporting_template } from '../components/Supporting'
import { Offices, offices_template } from '../components/OurOffices'
import { team_template, TeamImages } from '../components/TeamImages'
import { TitleAndContent, titleAndContent_template } from '../components/TitleAndContent'
import { Banner, banner_template } from '../components/Banner'
import { careerIntro_template, CareersIntro } from '../components/CareerIntro'
import { CareerImages, careerImages_template } from '../components/CareerImages'
import { office_template, OfficeSection } from '../components/OfficeSection'
import { LifeAt, lifeAt_template } from '../components/LifeAt'
import { TextAndButton, textAndButton_template } from '../components/TextAndButton'
import { card_template, JobCard } from '../components/JobList'
import { demo_template, DemoForm } from '../components/DemoForm'
import { PartnersDetails, PartnersDetails_template } from '../components/PartnersDetails'
import { ColWysiwyg, ColWysiwyg_template } from '../components/col-wysiwyg'
import { WYSIWYG, WYSIWYG_template } from '../components/WYSIWYG'
import {Instagram, instagram_template} from '../components/Instagram'

export const PAGE_BLOCKS = {
  welcomeBanner: {
    Component: WelcomeBanner,
    template: welcome_banner_template
  },
  banner: {
    Component: Banner,
    template: banner_template
  },
  imageAndContent: {
    Component: ImageAndContent,
    template: imageAndContent_template
  },
  textContent: {
    Component: TextContent,
    template: textContent_template
  },
  imageContent: {
    Component: ImageBlock,
    template: image_template
  },
  ImageCard: {
    Component: ImageCard,
    template: imageCard_template
  },
  partners: {
    Component: Partners,
    template: partners_template
  },
  imageAndText: {
    Component: ImageAndText,
    template: imageAndText_template
  },
  latestInsights: {
    Component: LatestInsights,
    template: latestInsights_template
  },
  supporting: {
    Component: Supporting,
    template: supporting_template
  },
  titleAndContent: {
    Component: TitleAndContent,
    template: titleAndContent_template
  },
  offices: {
    Component: Offices,
    template: offices_template
  },
  team: {
    Component: TeamImages,
    template: team_template
  },
  intro: {
    Component: CareersIntro,
    template: careerIntro_template
  },
  careerImages: {
    Component: CareerImages,
    template: careerImages_template
  },
  lifeAt: {
    Component: LifeAt,
    template: lifeAt_template
  },
  office: {
    Component: OfficeSection,
    template: office_template
  },
  jobCard: {
    Component: JobCard,
    template: card_template
  },
  textAndButton: {
    Component: TextAndButton,
    template: textAndButton_template
  },
  demo: {
    Component: DemoForm,
    template: demo_template
  },
  partnersDetails: {
    Component: PartnersDetails,
    template: PartnersDetails_template
  },
  cols: {
    Component: ColWysiwyg,
    template: ColWysiwyg_template
  },
  wysiwyg: {
    Component: WYSIWYG,
    template: WYSIWYG_template
  },
  image: {
    Component: ImageBlock,
    template: image_template
  },
  col: {
    Component: ColWysiwyg,
    template: ColWysiwyg_template
  },
  instagram: {
    Component: Instagram,
    template: instagram_template
  }
}
