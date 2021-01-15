import { GithubIcon } from './icon'

interface SocialProps {
  className?: string
}

const Social = ({ className }: SocialProps) => (
  <div className={`flex items-center text-lg ${className}`}>
    <a href="https://github.com/zhangyu1818" title="Github">
      <GithubIcon />
    </a>
  </div>
)

export default Social
