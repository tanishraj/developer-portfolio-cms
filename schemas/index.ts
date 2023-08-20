// base
import {Title} from './base/title'
import {Description} from './base/description'
import {SocialMedia} from './base/social-media'
import {SocialMediaList} from './base/social-media-list'
import {Experience} from './base/experience'
import {ExperienceList} from './base/experience-list'
import {Expertise} from './base/expertise'
import {ExpertiseList} from './base/expertise-list'
import {WorkDetails} from './base/work'
import {WorkList} from './base/work-list'
import {FormControl} from './base/form-control'

// Components
import {HeroSection} from './components/hero-section'
import {AboutSection} from './components/about-section'
import {ExpertiseSection} from './components/expertise-section'
import {ExperienceSection} from './components/experience-section'
import {ContactSection} from './components/contact-section'
import {WorkSection} from './components/work-section'

// Builders
import {PageBuilder} from './builders/page-builder'

export const schemaTypes = [
  // base
  Title,
  Description,
  SocialMedia,
  SocialMediaList,
  Experience,
  ExperienceList,
  Expertise,
  ExpertiseList,
  WorkDetails,
  WorkList,
  FormControl,

  // components
  HeroSection,
  AboutSection,
  ExpertiseSection,
  ExperienceSection,
  ContactSection,
  WorkSection,

  // builders
  PageBuilder,
]
