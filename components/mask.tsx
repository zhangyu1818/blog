interface MaskProps {
  position: 'top' | 'bottom'
}

export const showMask = () => {
  document.querySelectorAll<HTMLDivElement>('.mask-shadow').forEach((ele) => {
    ele.classList.add('show')
    ele.classList.remove('hide')
  })
}

export const hideMask = () => {
  document.querySelectorAll<HTMLDivElement>('.mask-shadow').forEach((ele) => {
    ele.classList.remove('show')
    ele.classList.add('hide')
  })
}

let timer: number
export const toggleMask = () => {
  hideMask()
  if (timer) {
    window.clearTimeout(timer)
  }
  timer = window.setTimeout(() => {
    showMask()
  }, 1000)
}

const Mask = ({ position }: MaskProps) => (
  <div
    className={
      position === 'top'
        ? 'fixed top-0 h-10 w-full z-10 mask-shadow'
        : 'fixed bottom-0 h-10 w-full z-10 rotate-180 mask-shadow'
    }
  />
)

export default Mask
