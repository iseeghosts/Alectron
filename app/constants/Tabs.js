console.log("1");

export const mainRoot = {
    root: {
      bottomTabs: {
          animate: false,
          children: [
            {
                stack: {
                    id: 'HOME_TAB',
                    children: [
                    {
                        component: {
                        id: 'HOME_SCREEN',
                        name: 'HomeScreen',
                        topBar: { visible: false, height: 0, }
                        }
                    }
                    ],
                    options: {
                    bottomTab: {
                        text: 'home',
                        icon: require('../assets/images/home.png')
                    }
                    }
                }
            },
            {
              stack: {
                  id: 'MEDIA_TAB',
                  children: [
                  {
                      component: {
                      id: 'MEDIA_SCREEN',
                      name: 'MediaScreen',
                      topBar: { visible: false, height: 0, }
                      }
                  }
                  ],
                  options: {
                  bottomTab: {
                      text: 'media',
                      icon: require('../assets/images/media.png')
                  }
                  }
              }
              },
              {
                  stack: {
                      id: 'HABIT_TAB',
                      children: [
                      {
                          component: {
                          id: 'HABIT_SCREEN',
                          name: 'HabitScreen',
                          topBar: { visible: false, height: 0, }
                          }
                      }
                      ],
                      options: {
                      bottomTab: {
                          text: 'habit',
                          icon: require('../assets/images/habit.png')
                      }
                      }
                  }
              },
              {
                  stack: {
                      id: 'MOTIVATION_TAB',
                      children: [
                      {
                          component: {
                          id: 'MOTIVATION_SCREEN',
                          name: 'MotivationScreen',
                          topBar: { visible: false, height: 0, }
                          }
                      }
                      ],
                      options: {
                      bottomTab: {
                          text: 'motivation',
                          icon: require('../assets/images/motivation.png')
                      }
                      }
                  }
              },
  
          ]
      }
    }
  };
console.log("1");

export const AuthTab = {
    stack : {
        children: [
        {
            component: {
            name: 'LandingPages'
            }
        },
        ]
    }
};

export const SignTab = {
    stack : {
        children: [
        {
            component: {
            name: 'AuthScreen'
            }
        },
        ]
    }
};
console.log("1");
export const ActivityTab = {
    stack : {
        id :'  ACTIVITY_TAB',
        children: [
        {
            component: {
            id:'ACTIVITY_SCREEN',
            name: 'ActivityScreen',
            topBar: { visible: false, height: 0, }
            }
        }
        ],
    }
};
console.log("1");

export const ProgressTab = {
    stack : {
        children: [
        {
            component: {
            name: 'ProgressScreen',
            topBar: { visible: false, height: 0, }
            }
        }
        ],
    }
};


console.log("4");
