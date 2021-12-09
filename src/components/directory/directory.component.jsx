import React from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectDirectorySection } from "../../redux/directory/directory.selectors";

import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'


const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(section => (
                <MenuItem key={section.id} title={section.title} imgUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);