
import GradientText from "@/app/globals/gradient-text"
import BackdropGradient from "@/app/globals/backdrop-gradient"
import { GROUPLE_CONSTANTS } from "@/constants"
import GlassCard from "@/app/globals/glass-card"

type Props = {
  children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
  return (
    <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center">
      <div className="flex items-center">
        <BackdropGradient className="w-8/12 h-2/6 opacity-50">
          <h5 className="text-2xl font-bold text-themeTextWhite">Mauve.</h5>
          <GradientText element="H2" className="text-4xl font-semibold py-1">
            Create Your Group
          </GradientText>
          <p className="text-themeTextGray">
            Create your group and start sharing with your friends and family.<br/>
             Your one stop solution for all your group needs.
          </p>
          <div className="flex flex-col gap-3 mt-16 pl-5">
            {GROUPLE_CONSTANTS.createGroupPlaceholder.map((placeholder) => (
              <div className="flex gap-3" key={placeholder.id}>
                {placeholder.icon}
                <p className="text-themeTextGray">{placeholder.label}</p>
              </div>
            ))}
          </div>
        </BackdropGradient>
      </div>
      <div>
        <BackdropGradient
          className="w-6/12 h-3/6 opacity-40"   
          container="lg:items-center"
        >
          <GlassCard className="xs:w-full lg:w-10/12 xl:w-8/12 mt-16 py-7">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  )
}

export default CreateGroupLayout