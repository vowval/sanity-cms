import { usePreview } from 'lib/sanity.preview'
import { frontPageQuery } from 'lib/sanity.queries'
import type { FrontPagePayload } from 'types'

import { FrontPage, FrontPageProps } from './FrontPage'

export default function FrontPagePreview({
  token,
  page,
  settings,
}: { token: null | string } & FrontPageProps) {
  const home: FrontPagePayload = usePreview(token, frontPageQuery)

  if (!home) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <FrontPage page={home} settings={settings} preview={true} />
}
