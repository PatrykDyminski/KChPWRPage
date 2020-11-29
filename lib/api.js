import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
  return posts
}

export function sortPostsByDate(posts) {
  return posts.sort((post1, post2) => (dateToNum(post1.date) > dateToNum(post2.date) ? '-1' : '1'))
}

export function getLatestPosts(fields = [], count = 1) {
  return sortPostsByDate(getAllPosts(fields)).slice(0, count)
}

export function getPeopleInVoices() {
  const peopleDir = path.join(process.cwd(), 'data', 'people')
  const filenames = fs.readdirSync(peopleDir)

  const peopleInVoices = filenames.map((filename) => {
    const filePath = path.join(peopleDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const voiceName = filename.split('\.')[0]
    const people = fileContents.split(/\n/);

    const people2 = people.map((p) => {
      const p2 = p.split(',')
      var img = p2[1]
      if (p2[1] == null || p2[1] == "") {
        img = "/avatar.png"
      }

      return {
        name: p2[0],
        picture: img
      }
    }
    )

    return {
      voiceName,
      people: people2,
    }
  })

  return peopleInVoices.sort((a, b) => b.people.length - a.people.length)
}

export function getRepertoire() {
  const musicDir = path.join(process.cwd(), 'data', 'repertoire')
  const filenames = fs.readdirSync(musicDir)

  const categories = filenames.map((filename) => {
    const filePath = path.join(musicDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const tracks = fileContents.split(/\n/)
    const categoryName = tracks[0]
    tracks.shift()

    return {
      categoryName: categoryName,
      tracks: tracks
    }
  })

  return categories.sort((a, b) => b.tracks.length - a.tracks.length)
}

function dateToNum(d) {
  d = d.split("-")
  return Number(d[2] + d[1] + d[0])
}