import { ref, computed } from 'vue'
import useAuthUser from 'src/composables/useAuthUser'

export default function useNavLinks() {
  const { user } = useAuthUser()

  const links = [
    {
      label: 'Home',
      link: '/',
      icon: 'home'
    },
    {
      label: 'About',
      link: 'about',
      icon: 'question_mark'
    },
    {
      label: 'Results',
      link: 'result',
      icon: 'insights'
    }
  ]

  const userLinks = [
    {
      label: 'Login',
      link: 'login',
      icon: 'login'
    },
    {
      label: 'Register',
      link: 'register',
      icon: 'how_to_reg'
    },
    {
      label: 'Logout',
      link: 'logout',
      icon: 'logout',
      isAuth: true
    }
  ]

  const footerLinks = [

    {
      label: 'Dhikr',
      link: '/',
      icon: 'diamond'
    },
    {
      label: 'Wird',
      link: 'wird',
      icon: 'import_contacts'
    }
  ]

  const userLinksProcessed = computed(() => {
    return userLinks.filter(link => {
      return (user.value && link.isAuth) || (!user.value && !link.isAuth)
    })
  })

  return {
    links,
    footerLinks,
    userLinks: userLinksProcessed
  }
}
