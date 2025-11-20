import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    index("pages/index.tsx"),
    ...prefix('students', [
        index('pages/students/index.tsx'),
        route(':id/details', 'pages/students/detail.tsx')
    ])
] satisfies RouteConfig;
