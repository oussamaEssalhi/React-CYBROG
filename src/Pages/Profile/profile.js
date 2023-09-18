import "./profile.css"
import { PrimaryButton, SectionHeader, SectionWrapperSecondary } from '../../components/index'
import { GamingLibrary, MainProfile, MostClips } from '../../Sections/index';

const profile = () => {
  return (
    <>
      <SectionWrapperSecondary>
        <MainProfile />
        <SectionHeader> Your Most Popular Clips</SectionHeader>
        <MostClips />
        <div className="read-more-clips">
          <PrimaryButton  >Read More Clips</PrimaryButton>
        </div>
      </SectionWrapperSecondary>
      <SectionWrapperSecondary>
        <GamingLibrary />
      </SectionWrapperSecondary>
    </>
  )
}

export default profile
