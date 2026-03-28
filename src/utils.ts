import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BlogFilePath = "src/app/blog/posts"

// getBlogPosts
export function getBlogPosts() {
    return getMDXFiles(path.join(process.cwd(), BlogFilePath))
}

// Obtain .mdx files in a given directory with their metadata
function getMDXFiles(dir: string) {
    const filePaths = fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')

    const data = filePaths.map((filePath) => getMDXMData(dir + "/" + filePath))

    return data;
}


function getMDXMData(filePath: string) {
    let rawContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(rawContent)

    const slug = path.basename(filePath, path.extname(filePath))

    console.log(data)

    return { metadata: data, slug, content }
} 


