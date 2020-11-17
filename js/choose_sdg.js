function selectGoal(goal_index) {
    id = 'sdg' + goal_index;
    goal = document.getElementById(id);
    goal.style.opacity == 0.5? goal.style.opacity = 1.0 : goal.style.opacity = 0.5;
}