function skillsMember() {
  return {
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    addSkill(skill) {
      this.skills.push(skill);
    },
    removeSkill(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    }
  };
}