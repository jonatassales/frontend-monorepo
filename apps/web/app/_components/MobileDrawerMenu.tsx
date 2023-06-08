import { cn } from '@app/utils'
import { Separator, TagInfo, ToggleGroup, ToggleGroupItem } from '@frontend/ds'
import { ColorModeSwitcher, UserAvatar, SideMenu } from './'

interface MobileDrawerProps extends React.ComponentPropsWithoutRef<'div'> {
  isOpen: boolean
}

export const MobileDrawerMenu = (props: MobileDrawerProps) => {
  const { isOpen, className } = props

  return (
    <div
      className={cn(
        'absolute z-10 h-screen w-screen transform overflow-hidden break-all bg-primary-25/90 px-12 pb-12 pt-64 backdrop-blur-sm transition-all duration-200 ease-out dark:bg-primary-1000/95',
        isOpen ? 'translate-y-0' : 'translate-y-[-100%]',
        className
      )}
    >
      <div className="flex justify-between pt-12">
        <UserAvatar />
        <div className="flex items-center justify-between gap-6">
          <ColorModeSwitcher />
        </div>
      </div>
      <div className="mt-20 flex items-center justify-between">
        <TagInfo className="bg-primary-50 text-primary-400" label="Account:">
          <p className="text-sm text-[#6941C6]">Jonatas@propeldata.com</p>
        </TagInfo>
        <ToggleGroup
          type="single"
          defaultValue="center"
          aria-label="Text alignment"
        >
          <ToggleGroupItem value="left" aria-label="Left aligned">
            Icon
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center aligned">
            Icon
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right aligned">
            Icon
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <Separator decorative className="my-24" />
      <SideMenu />
    </div>
  )
}
