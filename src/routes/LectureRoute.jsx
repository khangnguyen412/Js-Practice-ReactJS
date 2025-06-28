/* eslint-disable */
import React, { lazy, Suspense } from "react";

const AppDefault = lazy(() => import("../pages/welcome"));
const ChooseLecture = lazy(() => import("../pages/lecture"));
const Chap2Lecture01 = lazy(() => import("../pages/chapter-02/examples/lecture01-intro"));
const Chap2Lecture02 = lazy(() => import("../pages/chapter-02/examples/lecture02-jsx"));
const Chap2Lecture03FC = lazy(() => import("../pages/chapter-02/examples/lecture03-function-component"));
const Chap2Lecture03CC = lazy(() => import("../pages/chapter-02/examples/lecture03-class-component"));
const Chap2Lecture04 = lazy(() => import("../pages/chapter-02/examples/lecture04-props"));
const Chap2Lecture05 = lazy(() => import("../pages/chapter-02/examples/lecture05"));
const Chap3Lecture01 = lazy(() => import("../pages/chapter-03/examples/lecture01-lifecycle"));
const Chap3Lecture02 = lazy(() => import("../pages/chapter-03/examples/lecture02-useref"));
const Chap3Lecture03 = lazy(() => import("../pages/chapter-03/examples/lecture03-conditional"));
const Chap3Lecture04 = lazy(() => import("../pages/chapter-03/examples/lecture04-renderList"));
const Chap3Lecture05 = lazy(() => import("../pages/chapter-03/examples/lecture05-formhandling"));
const Chap4Lecture01 = lazy(() => import("../pages/chapter-04/examples/lecture01-axios"));
const Chap4Lecture02 = lazy(() => import("../pages/chapter-04/examples/lecture02-async-await"));
const Chap4Lecture03 = lazy(() => import("../pages/chapter-04/examples/lecture03-status"));
const Chap4Lecture04 = lazy(() => import("../pages/chapter-04/examples/lecture04-usecontext"));
const Chap4Lecture05 = lazy(() => import("../pages/chapter-04/examples/lecture05"));
const Chap5Lecture01 = lazy(() => import("../pages/chapter-05/examples/lecture01-route"));
const Chap5Lecture02 = lazy(() => import("../pages/chapter-05/examples/lecture02-nestedroutes"));

/**
 *  Chapter 5 Subpage
 */
const Chap5SubPageHome = lazy(() => import("../pages/chapter-05/pages/home"));
const Chap5SubPageAbout = lazy(() => import("../pages/chapter-05/pages/about"));
const Chap5SubPageContact = lazy(() => import("../pages/chapter-05/pages/contact"));
const Chap5SubPageHook = lazy(() => import("../pages/chapter-05/pages/hook"));

export const LectureRoute = [
    {
        path: '/',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <AppDefault></AppDefault>
            </Suspense>
        )
    },
    {
        path: '/choose-lecture',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <ChooseLecture></ChooseLecture>
            </Suspense>
        )
    },
    {
        path: '/chapter2-lecture1',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap2Lecture01></Chap2Lecture01>
            </Suspense>
        )
    },
    {
        path: '/chapter2-lecture2',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap2Lecture02></Chap2Lecture02>
            </Suspense>
        )
    },
    {
        path: '/chapter2-lecture3-1',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap2Lecture03FC></Chap2Lecture03FC>
            </Suspense>
        )
    },
    {
        path: '/chapter2-lecture3-2',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap2Lecture03CC></Chap2Lecture03CC>
            </Suspense>
        )
    },
    {
        path: '/chapter2-lecture4',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap2Lecture04></Chap2Lecture04>
            </Suspense>
        )
    },
    {
        path: '/chapter2-lecture5',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap2Lecture05></Chap2Lecture05>
            </Suspense>
        )
    },
    {
        path: '/chapter3-lecture1',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap3Lecture01></Chap3Lecture01>
            </Suspense>
        )
    },
    {
        path: '/chapter3-lecture2',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap3Lecture02></Chap3Lecture02>
            </Suspense>
        )
    },
    {
        path: '/chapter3-lecture3',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap3Lecture03></Chap3Lecture03>
            </Suspense>
        )
    },
    {
        path: '/chapter3-lecture4',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap3Lecture04></Chap3Lecture04>
            </Suspense>
        )
    },
    {
        path: '/chapter3-lecture5',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap3Lecture05></Chap3Lecture05>
            </Suspense>
        )
    },
    {
        path: '/chapter4-lecture1',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap4Lecture01></Chap4Lecture01>
            </Suspense>
        )
    },
    {
        path: '/chapter4-lecture2',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap4Lecture02></Chap4Lecture02>
            </Suspense>
        )
    },
    {
        path: '/chapter4-lecture3',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap4Lecture03></Chap4Lecture03>
            </Suspense>
        ),
    },
    {
        path: '/chapter4-lecture4',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap4Lecture04></Chap4Lecture04>
            </Suspense>
        ),
    },
    {
        path: '/chapter4-lecture5',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap4Lecture05></Chap4Lecture05>
            </Suspense>
        ),
    },
    {
        path: '/chapter5-lecture1/',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap5Lecture01></Chap5Lecture01>
            </Suspense>
        ),
        children: [
            { index: true, path: 'home', element: <Chap5SubPageHome />, },
            { path: 'about', element: <Chap5SubPageAbout />, },
            { path: 'contact', element: <Chap5SubPageContact />, },
            { path: 'hook', element: <Chap5SubPageHook />, },
        ]
    },
    {
        path: '/chapter5-lecture2/',
        element: (
            <Suspense fallback={<p>Đang tải...</p>}>
                <Chap5Lecture02></Chap5Lecture02>
            </Suspense>
        ),
        children: [
            { index: true, path: 'home', element: <Chap5SubPageHome />, },
            { path: 'about', element: <Chap5SubPageAbout />, },
            { path: 'contact', element: <Chap5SubPageContact />, },
            { path: 'hook', element: <Chap5SubPageHook />, },
        ]
    },
    
]