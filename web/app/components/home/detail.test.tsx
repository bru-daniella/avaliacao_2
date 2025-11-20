import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Detail } from "./detail"

describe("Detail", () => {
    test("Deve renderizar corretamente", () => {
        const { getByText } = render(<Detail/>)

        expect(getByText("Nome")).toBeInTheDocument();
        expect(getByText("Turma")).toBeInTheDocument();
        expect(getByText("Curso")).toBeInTheDocument();
        expect(getByText("Matrícula")).toBeInTheDocument();
    })
})