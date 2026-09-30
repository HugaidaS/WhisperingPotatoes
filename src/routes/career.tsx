import { createFileRoute } from "@tanstack/react-router"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"

export const Route = createFileRoute("/career")({
  component: CareerPage,
})

// TODO: each career card will just have a short description, picture, skills will be removed into a separate section into about
// Card is clickable and expandable as a portal
function CareerPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold">Career</h1>
      <div>
        Those are places where I worked at, all of them were lovely and I
        enjoyed working there!
      </div>
      <div className="flex gap-4">
        <Dialog>
          <DialogTrigger
            render={
              <Card className="cursor-pointer transition-shadow hover:ring-2 hover:ring-foreground/20">
                <CardHeader>
                  <CardTitle>Card title</CardTitle>
                  <CardDescription>Description</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  Card content
                </CardContent>
              </Card>
            }
          />
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sticky Footer</DialogTitle>
              <DialogDescription>
                This dialog has a sticky footer that stays visible while the
                content scrolls.
              </DialogDescription>
            </DialogHeader>
            <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
