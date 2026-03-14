import { render, screen } from "@testing-library/react"
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import AiWorkflow from "@/components/AiWorkflow"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

// Nav
describe("Nav", () => {
  it("renders without crashing", () => {
    render(<Nav />)
  })
  it("includes a LinkedIn link", () => {
    render(<Nav />)
    const links = screen.getAllByRole("link", { name: /linkedin/i })
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute("href", "https://www.linkedin.com/in/georgeasoto/")
  })
})

// Hero
describe("Hero", () => {
  it("renders without crashing", () => {
    render(<Hero />)
  })
  it("shows George Soto's name", () => {
    render(<Hero />)
    expect(screen.getByText("George Soto")).toBeInTheDocument()
  })
  it("shows the title", () => {
    render(<Hero />)
    expect(screen.getByText(/Technical Lead & AI Workflow Engineer/i)).toBeInTheDocument()
  })
  it("includes a LinkedIn CTA", () => {
    render(<Hero />)
    const link = screen.getByRole("link", { name: /connect on linkedin/i })
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/georgeasoto/")
  })
})

// About
describe("About", () => {
  it("renders without crashing", () => {
    render(<About />)
  })
  it("mentions 8+ years", () => {
    render(<About />)
    expect(screen.getByText(/8\+ years/i)).toBeInTheDocument()
  })
})

// Skills
describe("Skills", () => {
  it("renders without crashing", () => {
    render(<Skills />)
  })
  it("shows all skill group labels", () => {
    render(<Skills />)
    expect(screen.getByText("Languages")).toBeInTheDocument()
    expect(screen.getByText("Frameworks")).toBeInTheDocument()
    expect(screen.getByText("Cloud & DevOps")).toBeInTheDocument()
    expect(screen.getByText("Databases")).toBeInTheDocument()
    expect(screen.getByText("AI Tooling")).toBeInTheDocument()
  })
  it("includes TypeScript in skills", () => {
    render(<Skills />)
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
  })
})

// Experience
describe("Experience", () => {
  it("renders without crashing", () => {
    render(<Experience />)
  })
  it("shows most recent role first", () => {
    render(<Experience />)
    expect(screen.getByText("Technical Lead, Frontend")).toBeInTheDocument()
    expect(screen.getAllByText(/Unicity International/i).length).toBeGreaterThan(0)
  })
  it("includes all five companies", () => {
    render(<Experience />)
    expect(screen.getAllByText(/Unicity International/i).length).toBeGreaterThan(0)
    expect(screen.getByText("Leafly")).toBeInTheDocument()
    expect(screen.getByText("American Express")).toBeInTheDocument()
    expect(screen.getAllByText(/GoDaddy/i).length).toBeGreaterThan(0)
  })
})

// AI Workflow
describe("AiWorkflow", () => {
  it("renders without crashing", () => {
    render(<AiWorkflow />)
  })
  it("mentions CodeLens", () => {
    render(<AiWorkflow />)
    expect(screen.getAllByText(/CodeLens/i).length).toBeGreaterThan(0)
  })
  it("mentions the Raspberry Pi", () => {
    render(<AiWorkflow />)
    expect(screen.getAllByText(/Raspberry Pi/i).length).toBeGreaterThan(0)
  })
  it("links to the gasoto-ai GitHub org repos", () => {
    render(<AiWorkflow />)
    const links = screen.getAllByRole("link")
    const hrefs = links.map((l) => l.getAttribute("href"))
    expect(hrefs).toContain("https://github.com/gasoto-ai/codelens")
    expect(hrefs).toContain("https://github.com/gasoto-ai/fish-tank-tools")
    expect(hrefs).toContain("https://github.com/gasoto-ai/the-crate")
  })
})

// Projects
describe("Projects", () => {
  it("renders without crashing", () => {
    render(<Projects />)
  })
  it("shows all three projects", () => {
    render(<Projects />)
    expect(screen.getByText("CodeLens")).toBeInTheDocument()
    expect(screen.getByText("Fish Tank Tools")).toBeInTheDocument()
    expect(screen.getByText("The Crate")).toBeInTheDocument()
  })
})

// Contact
describe("Contact", () => {
  it("renders without crashing", () => {
    render(<Contact />)
  })
  it("includes LinkedIn CTA with correct href", () => {
    render(<Contact />)
    const link = screen.getByRole("link", { name: /connect on linkedin/i })
    expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/georgeasoto/")
  })
  it("mentions leadership and consulting", () => {
    render(<Contact />)
    expect(screen.getByText(/leadership roles and AI consulting/i)).toBeInTheDocument()
  })
})

// Footer
describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />)
  })
  it("includes LinkedIn and GitHub links", () => {
    render(<Footer />)
    const links = screen.getAllByRole("link")
    const hrefs = links.map((l) => l.getAttribute("href"))
    expect(hrefs).toContain("https://www.linkedin.com/in/georgeasoto/")
    expect(hrefs).toContain("https://github.com/gasoto-ai")
  })
})
