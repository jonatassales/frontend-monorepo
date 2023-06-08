import Link from 'next/link'
import { Layout, User, UserList, Gear, SquaresFour } from '@frontend/ds'

import { cn } from '@app/utils'

export interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
  icon?: React.ReactNode // TODO: Replace with IconProps
  children: React.ReactNode
  highlighted?: boolean
}

export function SideMenu(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className="sticky top-0 h-full w-full bg-transparent px-12  dark:bg-primary-1000 dark:bg-gradient-to-b dark:from-primary-1000 dark:to-primary-950"
    >
      <ul>
        <Link href="/" title="Dashboard menu link">
          <ListItem className="mb-10" icon={<Layout width={18} height={18} />}>
            Dashboard
          </ListItem>
        </Link>
        <span className="mb-6 block pl-10 pt-10 text-xs font-semiBold uppercase text-gray-400 sm:hidden md:block">
          Account
        </span>
        <Link href="#" title="Applications menu link">
          <ListItem icon={<SquaresFour width={20} height={20} />}>
            Applications
          </ListItem>
        </Link>
        <Link href="#" title="Account Settings menu link">
          <ListItem icon={<Gear width={20} height={20} />}>Settings</ListItem>
        </Link>
        <span className="mb-6 block pl-10 pt-10 text-xs font-semiBold uppercase text-gray-400 sm:hidden md:block">
          General
        </span>
        <Link href="#" title="User Profile menu link">
          <ListItem icon={<User width={16} height={16} />}>Profile</ListItem>
        </Link>
        <Link href="#" title="User Accounts menu link">
          <ListItem icon={<UserList width={20} height={20} />}>
            Accounts
          </ListItem>
        </Link>
      </ul>
    </div>
  )
}

function ListItem(props: ListItemProps) {
  const { icon, className, children, highlighted = false } = props

  const iconWeight = highlighted ? 'bold' : 'regular'

  return (
    <li
      className={cn(
        'mb-4 flex w-full items-center gap-4 rounded-4 py-10 pl-10 transition duration-200 ease-in-out sm:w-fit sm:gap-0 md:w-full md:gap-4',
        highlighted
          ? 'rounded-4 bg-primary-50 text-primary-600 dark:bg-primary-100 dark:text-primary-900 [&>span]:font-medium '
          : 'hover:rounded-4 hover:bg-primary-50 hover:text-primary-600 dark:font-semibold dark:hover:bg-primary-100 dark:hover:text-primary-900 hover:[&>span]:font-medium [&>span]:dark:hover:font-medium',
        className
      )}
    >
      {icon}
      <span
        className={cn(
          highlighted && 'dark:text-primary-900 dark:hover:text-primary-900',
          'block sm:hidden md:block'
        )}
      >
        {children}
      </span>
    </li>
  )
}
