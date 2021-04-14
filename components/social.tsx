import { GithubIcon, JuejinIcon } from './icon'

interface SocialProps {
  className?: string
}

const Social = ({ className }: SocialProps) => (
  <div className={`flex items-center text-lg ${className}`}>
    <a target="_blank" rel="noopener" href="https://github.com/zhangyu1818" title="Github">
      <GithubIcon />
    </a>
    <a
      className="ml-3"
      target="_blank"
      rel="noopener"
      href="https://juejin.cn/user/4089838986339927"
      title="Juejin"
    >
      <JuejinIcon />
    </a>
  </div>
)

export default Social
