//import Head from 'next/head';
//import Layout, { siteTitle } from '../components/layout';
const axios = require('axios').default;
import Router from "next/router";
import NextLink from "next/link";
import Button from '@mui/material/Button';
//import { Heading, Link, Flex, Box, Button, Divider } from "@chakra-ui/core";


export default function Home() {
  return (
    <div>
    <h1>Countries code</h1>
    <Button
    onClick={() => Router.push(`/countries`)}
    variant="contained">Go to Country search</Button>
    </div>
  )



}
