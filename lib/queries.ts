// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems { ... on ParagraphStatItem { id number label } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            __typename
            id
            title
            path
            body {
              processed
            }
          }
          ... on NodeHomepage {
            __typename
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
          ... on NodeMenuItem {
            __typename
            id
            title
            path
            body { processed summary }
            price
            menuCategory { ... on TermMenuCategory { id name } }
            spiceLevel
            dietaryInfo
            isBestseller
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
          ... on NodeLocationSchedule {
            __typename
            id
            title
            path
            body { processed summary }
            dayOfWeek
            locationName
            address
            startTime
            endTime
            neighborhood
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_MENU_ITEMS = gql`
  query GetMenuItems($first: Int = 10) {
    nodeMenuItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeMenuItem {
          body { processed summary }
          price
          menuCategory { ... on TermMenuCategory { id name } }
          spiceLevel
          dietaryInfo
          isBestseller
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_MENU_ITEM_BY_PATH = gql`
  query GetMenuItemByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeMenuItem {
            id
            title
            path
            body { processed summary }
            price
            menuCategory { ... on TermMenuCategory { id name } }
            spiceLevel
            dietaryInfo
            isBestseller
            image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`

export const GET_LOCATION_SCHEDULES = gql`
  query GetLocationSchedules($first: Int = 10) {
    nodeLocationSchedules(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeLocationSchedule {
          body { processed summary }
          dayOfWeek
          locationName
          address
          startTime
          endTime
          neighborhood
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        }
      }
    }
  }
`

export const GET_LOCATION_SCHEDULE_BY_PATH = gql`
  query GetLocationScheduleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeLocationSchedule {
            id
            title
            path
          body { processed summary }
          dayOfWeek
          locationName
          address
          startTime
          endTime
          neighborhood
          image { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          }
        }
      }
    }
  }
`
