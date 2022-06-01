import React from "react";
import SkillListItem from './SkillListItem';

function SkillList({skills}){
    return(
    <ul>
        <SkillListItem></SkillListItem>
        <SkillListItem></SkillListItem>
        <SkillListItem></SkillListItem>
    </ul>
    );
}

export default SkillList