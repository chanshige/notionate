import React from 'react'
import type {
  MultiSelectPropertyItemObjectResponse,
} from '../../server/types'

export type GalleryMultiSelectProps = {
  payload: MultiSelectPropertyItemObjectResponse
}

export const GalleryMultiSelectField: React.FC<GalleryMultiSelectProps> = ({ payload }) => {
  const Tag = (name: string) => {
    return (
      <div className="notionate-gallery-multiselect-a">
        {name}
      </div>
    )
  }

  return (
    <ul className="notionate-gallery-multiselect-ul">
      {payload.multi_select.map(f => (
        <li key={f.id} className={`notionate-gallery-multiselect-li notionate-select-${f.color}`}>
          {Tag(f.name)}
        </li>
      ))}
    </ul>
  )
}

export default GalleryMultiSelectField
