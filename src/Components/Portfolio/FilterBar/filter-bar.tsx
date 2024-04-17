import './filter-bar.scss'
import { Skill } from "../../../Models/skill";
import { MutableRefObject, useRef, useState } from 'react';

const useFocus = (): [any, () => void] => {
  const htmlElRef: MutableRefObject<any> = useRef(null);
  const setFocus = (): void => {
    htmlElRef?.current?.focus?.();
  };

  return [htmlElRef, setFocus];
};

export const FilterBar = ({skillList, activeFilters, addFilter} : 
                          {skillList : Skill[], activeFilters: Skill[],addFilter: (skill : Skill)=> void}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputRef, setInputFocus] = useFocus()

  const onUpdateSearch = (evt : React.SyntheticEvent) => {
    let target = evt.target as HTMLInputElement;
    setSearchTerm(target.value);
  }
  let lowerSearch = searchTerm.toLowerCase();
  skillList = skillList.filter( skill => (skill.name.toLowerCase().includes(lowerSearch) && !activeFilters.find( el => el.name === skill.name)))

  const selectSkill = (skill : Skill) => {
    setSearchTerm("");
    addFilter(skill);
    setInputFocus();
  }
  return (
    <div className='filter-bar'>
      <svg viewBox="0 0 16 16" className="search-icon">
        <path d="m10.582 9.874 4.625 4.626-.707.707-4.626-4.625a6 6 0 1 1 .707-.707ZM6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Z"></path>
      </svg>
      <input ref={inputRef} value={searchTerm} onChange={onUpdateSearch} placeholder='Filter project using tech'></input>
      {
        searchTerm?.length > 0 ?
        <div className='option-menu'>
        {
          skillList.map( (el) => (
            <div className='selector-option' key={el.name} onClick={() => (selectSkill(el))}>{el.name}</div>
          ))
        }
        </div>
        : null
      }
    </div>
  )}