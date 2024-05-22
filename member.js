function skillsMember() {
  var member = new Member();
  member.skills = [
    new Skill('JavaScript', '3 years'),
    new Skill('Java', '2 years'),
    new Skill('C++', '1 year')
  ];
  return member;
}