'use client'

interface WebsiteLinkProps {
  website: string
}

export default function WebsiteLink({ website }: WebsiteLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <a 
      href={`https://${website}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block text-[#4F7DF3] hover:underline"
      onClick={handleClick}
    >
      {website}
    </a>
  )
} 