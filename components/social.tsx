import { ArrowTopRight, GithubIcon, JuejinIcon } from './icon'

interface SocialProps {
  className?: string
}

const Social = ({ className = '' }: SocialProps) => (
  <div className={`flex items-center ${className}`}>
    <a target="_blank" rel="noopener" href="https://github.com/zhangyu1818" title="Github">
      <span className="flex items-center">
        <GithubIcon />
        <span className="ml-4 mr-2">Github</span>
        <ArrowTopRight />
      </span>
    </a>
    <span className="w-4" />
    <a
      className="ml-3"
      target="_blank"
      rel="noopener"
      href="https://juejin.cn/user/4089838986339927"
      title="Juejin"
    >
      <span className="flex items-center">
        <JuejinIcon />
        <span className="ml-4 mr-2">掘金</span>
        <ArrowTopRight />
      </span>
    </a>
  </div>
)

export default Social
