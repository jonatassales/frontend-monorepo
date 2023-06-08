import React from 'react'
import { UserAvatar } from './UserAvatar'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  IconButton,
  TagInfo,
  CaretDown,
  CaretUp,
  Gear,
  User,
  UserList,
  SignOut
} from '@frontend/ds'

export function UserMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  const handleOpenChange = (open: boolean) => {
    setIsDropdownOpen(open)
  }
  return (
    <div className="flex items-center gap-x-4">
      <UserAvatar />
      <Dropdown onOpenChange={handleOpenChange}>
        <DropdownTrigger asChild>
          <IconButton>
            {isDropdownOpen ? (
              <CaretUp width={18} height={18} />
            ) : (
              <CaretDown width={18} height={18} />
            )}
          </IconButton>
        </DropdownTrigger>

        <DropdownContent sideOffset={26} align="end">
          <DropdownItem>
            <div className="my-6">
              <TagInfo
                className="bg-primary-50 text-primary-400"
                label="Account:"
              >
                <p className="text-sm text-[#6941C6]">Jonatas@propeldata.com</p>
              </TagInfo>
            </div>
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem>
            <div className="flex items-center gap-8">
              <Gear width={20} height={20} />
              <span>Account Settings</span>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="flex items-center gap-8">
              <User width={16} height={16} />
              <span> My Profile</span>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="flex items-center gap-8">
              <UserList width={20} height={20} />
              <span> My Accounts</span>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="flex items-center gap-8">
              <SignOut width={20} height={20} />
              <span>Logout</span>
            </div>
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}
