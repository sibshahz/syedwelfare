import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const DashboardContent = [
  {
    title: "Card 1",
    description: "Card 1 Description",
    content: "Card 1 Content",
    footer: "Card 1 Footer",
  },
  {
    title: "Card 2",
    description: "Card 2 Description",
    content: "Card 2 Content",
    footer: "Card 2 Footer",
  },
  {
    title: "Card 3",
    description: "Card 3 Description",
    content: "Card 3 Content",
    footer: "Card 3 Footer",
  },
  {
    title: "Card 4",
    description: "Card 4 Description",
    content: "Card 4 Content",
    footer: "Card 4 Footer",
  },
  {
    title: "Card 5",
    description: "Card 5 Description",
    content: "Card 5 Content",
    footer: "Card 5 Footer",
  },
  {
    title: "Card 6",
    description: "Card 6 Description",
    content: "Card 6 Content",
    footer: "Card 6 Footer",
  },
  {
    title: "Card 7",
    description: "Card 7 Description",
    content: "Card 7 Content",
    footer: "Card 7 Footer",
  },
  {
    title: "Card 8",
    description: "Card 8 Description",
    content: "Card 8 Content",
    footer: "Card 8 Footer",
  }
]
const DashboardCard = ({
  title,
  description,
  content,
  footer,
}: {
  title: string
  description: string
  content: string
  footer: string
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <p>{footer}</p>
      </CardFooter>
    </Card>
  )
}

const DashboardPage = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        DashboardContent.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            description={card.description}
            content={card.content}
            footer={card.footer}
          />
        ))
      }
    </div>
  )
}

export default DashboardPage