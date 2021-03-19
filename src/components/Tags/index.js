import React, { useState } from 'react'
import { Container } from './style'

const TagsInput = props => {
	const [tags, setTags] = useState(props.tags);

	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};

	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};


	return (
    <Container>
      <div className="tags-input">
        <input
          type="text"
          onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
          placeholder="Press enter to add new tag."
        />
      </div>

      <div>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                x
              </span>
              <div className="dropdown-content">
                  <a>{tag}</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
	);
};

export default TagsInput;