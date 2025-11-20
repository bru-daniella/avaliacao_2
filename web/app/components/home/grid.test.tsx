import "@testing-library/jest-dom"
import {render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { Grid } from "./grid"

describe("Grid", () => {
    test("Deve renderizar corretamente", async () => {
        render(<Grid/>)

        await screen.findByText("Nome");
        expect(screen.getByText("Nome")).toBeInTheDocument();
        expect(screen.getByText("Turma")).toBeInTheDocument();
        expect(screen.getByText("Curso")).toBeInTheDocument();
        expect(screen.getByText("Matrícula")).toBeInTheDocument();
    })
})