import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { LiaHackerrank } from "react-icons/lia";
import { RiMailLine, RiSkypeLine, RiTelegramLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri"

export default function Contact() {
  return (
    <div className="container p-8 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Card className="w-[500px]" shadow="sm">
          <CardHeader className="text-xl font-bold">Contact Me</CardHeader>
          <CardBody>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <RiMailLine className="text-2xl" />
                <a
                  href="mailto:aleksandardeveoper@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  aleksandardeveoper@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <RiLinkedinLine className="text-2xl" />
                <a
                  href="https://www.linkedin.com/in/aleksandar-aleksic-2136a9277/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aleksandar Aleksic
                </a>
              </div>

              <div className="flex gap-4">
                <RiSkypeLine className="text-2xl" />
                <a
                  href="https://join.skype.com/invite/yPZq4HNIHd2U"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aleksandar Aleksic
                </a>
              </div>

              <div className="flex gap-4">
                <RiTelegramLine className="text-2xl" />
                <a
                  href="https://t.me/aleksandar_aleksic"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aleksandar Aleksic
                </a>
              </div>

              <div className="flex gap-4">
                <RiGithubLine className="text-2xl" />
                <a
                  href="https://github.com/aleksandaralek"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/aleksandaralek
                </a>
              </div>

              <div className="flex gap-4">
                <LiaHackerrank className="text-2xl" />
                <a
                  href="https://www.hackerrank.com/profile/aleksandardeveo1"
                  target="_blank"
                  rel="noreferrer"
                >
                  hackerrank.com/aleksandardeveo1
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
