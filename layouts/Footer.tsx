import styles from "../styles/Home.module.css";
import {Box, Container, createSvgIcon, Grid, Stack, Tooltip, Typography} from "@mui/material";
import React, {useContext} from "react";
import styled from "@emotion/styled";
import getConfig from "next/config";
import networks from "../config/networks";
import {ThemeContext} from "@/contexts/Theme";
import {CurrentNetworkContext} from "@/contexts/CurrentNetwork";
import {projects} from "@/config/projects";
import Link from "next/link";

const TwitterLogo = createSvgIcon(<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/>, 'twitter')
const TelegramLogo = createSvgIcon(<path id="telegram-5" d="M12,0c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12Zm0,2c5.514,0 10,4.486 10,10c0,5.514 -4.486,10 -10,10c-5.514,0 -10,-4.486 -10,-10c0,-5.514 4.486,-10 10,-10Zm2.692,14.889c0.161,0.115 0.368,0.143 0.553,0.073c0.185,-0.07 0.322,-0.228 0.362,-0.42c0.435,-2.042 1.489,-7.211 1.884,-9.068c0.03,-0.14 -0.019,-0.285 -0.129,-0.379c-0.11,-0.093 -0.263,-0.12 -0.399,-0.07c-2.096,0.776 -8.553,3.198 -11.192,4.175c-0.168,0.062 -0.277,0.223 -0.271,0.4c0.006,0.177 0.125,0.33 0.296,0.381c1.184,0.354 2.738,0.847 2.738,0.847c0,0 0.725,2.193 1.104,3.308c0.047,0.139 0.157,0.25 0.301,0.287c0.145,0.038 0.298,-0.001 0.406,-0.103c0.608,-0.574 1.548,-1.461 1.548,-1.461c0,0 1.786,1.309 2.799,2.03Zm-5.505,-4.338l0.84,2.769l0.186,-1.754c0,0 3.243,-2.925 5.092,-4.593c0.055,-0.048 0.062,-0.13 0.017,-0.188c-0.045,-0.057 -0.126,-0.071 -0.188,-0.032c-2.143,1.368 -5.947,3.798 -5.947,3.798Z"/>, 'telegram');
const YouTubeLogo = createSvgIcon(<path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>, 'youtube')
const GitHubLogo = createSvgIcon(<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/>, 'github')
const DiscordLogo = createSvgIcon(<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm2.784 15.584h-6.804c-.678 0-1.23-.552-1.23-1.236v-8.112c0-.684.552-1.236 1.23-1.236h8.04c.678 0 1.23.552 1.23 1.236v10.764l-1.29-1.14-.726-.672-.768-.714.318 1.11zm-1.08-2.748c1.326-.042 1.836-.912 1.836-.912 0-1.932-.864-3.498-.864-3.498-.864-.648-1.686-.63-1.686-.63l-.084.096c1.02.312 1.494.762 1.494.762-.624-.342-1.236-.51-1.806-.576-.432-.048-.846-.036-1.212.012l-.102.012c-.21.018-.72.096-1.362.378l-.354.174s.498-.474 1.578-.786l-.06-.072s-.822-.018-1.686.63c0 0-.864 1.566-.864 3.498 0 0 .504.87 1.83.912l.402-.498c-.762-.228-1.05-.708-1.05-.708l.168.102.024.018.024.013.006.004.024.013c.15.084.3.15.438.204.246.096.54.192.882.258.45.084.978.114 1.554.006.282-.048.57-.132.87-.258.21-.078.444-.192.69-.354 0 0-.3.492-1.086.714l.396.486zm-2.79-2.802c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666.006-.366-.27-.666-.612-.666zm2.19 0c-.342 0-.612.3-.612.666 0 .366.276.666.612.666.342 0 .612-.3.612-.666 0-.366-.27-.666-.612-.666z"/>, 'discord')
const RedditLogo = createSvgIcon(<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 11.889c0-.729-.596-1.323-1.329-1.323-.358 0-.681.143-.92.373-.905-.595-2.13-.975-3.485-1.023l.742-2.334 2.008.471-.003.029c0 .596.487 1.082 1.087 1.082.599 0 1.086-.485 1.086-1.082s-.488-1.082-1.087-1.082c-.46 0-.852.287-1.01.69l-2.164-.507c-.094-.023-.191.032-.22.124l-.827 2.603c-1.419.017-2.705.399-3.65 1.012-.237-.219-.552-.356-.9-.356-.732.001-1.328.594-1.328 1.323 0 .485.267.905.659 1.136-.026.141-.043.283-.043.429-.001 1.955 2.404 3.546 5.359 3.546 2.956 0 5.36-1.591 5.36-3.546 0-.137-.015-.272-.038-.405.416-.224.703-.657.703-1.16zm-8.612.908c0-.434.355-.788.791-.788.436 0 .79.353.79.788 0 .434-.355.787-.79.787-.436.001-.791-.352-.791-.787zm4.53 2.335c-.398.396-1.024.589-1.912.589l-.007-.001-.007.001c-.888 0-1.514-.193-1.912-.589-.073-.072-.073-.19 0-.262.072-.072.191-.072.263 0 .325.323.864.481 1.649.481l.007.001.007-.001c.784 0 1.324-.157 1.649-.481.073-.072.19-.072.263 0 .073.072.073.19 0 .262zm-.094-1.547c-.436 0-.79-.353-.79-.787 0-.434.355-.788.79-.788.436 0 .79.353.79.788 0 .434-.354.787-.79.787z"/>, 'reddit')
const LitePaperLogo = createSvgIcon(<path d="M16 0h-14v24h20v-18l-6-6zm0 3l3 3h-3v-3zm-12 19v-20h10v6h6v14h-16z"/>, 'litepaper');

const { publicRuntimeConfig: config } = getConfig();
const supportedNetworks = networks({ config });

const StyledAnchor = styled('a')(({ theme }: any) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.text.primary
  }
}));

const StyledLink = styled(Link)(({ theme }: any) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.text.primary
  }
}));

const Footer = ({ contractAddress: mainAddress, projectId = 'vmpx' }
                  : { contractAddress: string | number | undefined, projectId: string }) => {
  const { mode } = useContext(ThemeContext);
  const { networkId } = useContext(CurrentNetworkContext);
  const project = projects[projectId];

  const isDark = mode === 'dark';
  const currentNetwork = supportedNetworks[networkId || 'mainnet'];

  const maybeContractAddress = mainAddress && mainAddress.toString().startsWith('0x') ? mainAddress : '';

  const mainBlockExplorerUrl = typeof maybeContractAddress === 'string'
    && currentNetwork?.explorerUrl
    && `${currentNetwork.explorerUrl}address/${maybeContractAddress}`;

  const contractAddressString = projectId === 'vmpx'
    ? `VMPX: ${((maybeContractAddress || '').toString() || '-').slice(0, 12)}`
    : `${project.name}: ${((maybeContractAddress || '').toString() || '-').slice(0, 12)}`;

  const isHomePage = !networkId;

  return (
    <footer className={styles.footer}>
      <Grid container sx={{ alignItems: 'center', pt: 2 }} >
        {isHomePage && <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontSize: 14, display: { xs: 'none', md: 'block' } }}>
              {project.copyright} 2023 by <StyledAnchor style={{ display: 'unset' }}
                                                        href={project.web}
                                                        target="_blank"
                                                        rel="noreferrer">
              {project.owner || project.name}
            </StyledAnchor>. {project.license}
            </Typography>
        </Grid>}
        {!isHomePage && <Grid item xs={12} md={6} >
          <Container >
            <Stack direction="row" sx={{justifyContent: {xs: 'center', md: 'right'}, alignItems: 'center'}}>
              {project?.twitter && <Box sx={{px: 1}}>
                <Tooltip title="Twitter">
                  <a href={project.twitter}
                     rel="noreferrer"
                     target="_blank">
                    <TwitterLogo color={isDark?"disabled":"action"} />
                  </a>
                </Tooltip>
              </Box>}
              {project?.youtube && <Box sx={{px: 1}}>
                <Tooltip title="YouTube">
                  <a href={project.youtube}
                     rel="noreferrer"
                     target="_blank">
                    <YouTubeLogo color={isDark?"disabled":"action"} />
                  </a>
                </Tooltip>
              </Box>}
              {project?.telegram && <Box sx={{px: 1}}>
                <Tooltip title="Telegram">
                  <a href={project.telegram}
                     rel="noreferrer"
                     target="_blank">
                    <TelegramLogo color={isDark?"disabled":"action"} />
                  </a>
                </Tooltip>
              </Box>}
              {project?.github && <Box sx={{px: 1}}>
                <Tooltip title="GitHub">
                  <a href={project.github}
                     rel="noreferrer"
                     target="_blank">
                    <GitHubLogo color={isDark?"disabled":"action"} />
                  </a>
                </Tooltip>
              </Box>}
              {project?.discord && <Box sx={{px: 1}}>
                <Tooltip title="Discord">
                  <a href={project.discord}
                     rel="noreferrer"
                     target="_blank">
                    <DiscordLogo color={isDark?"disabled":"action"} />
                  </a>
                </Tooltip>
              </Box>}
              {project?.reddit && <Box sx={{px: 1}}>
                <Tooltip title="Reddit">
                  <a href={project.reddit}
                     rel="noreferrer"
                     target="_blank">
                    <RedditLogo color={isDark?"disabled":"action"} />
                  </a>
                </Tooltip>
              </Box>}
              {project?.whitePaper && <Box sx={{px: 1}}>
                <Tooltip title="Lite paper">
                  <a href={project.whitePaper}
                     rel="noreferrer"
                     target="_blank">
                    <LitePaperLogo color={isDark?"disabled":"action"} />
                  </a>
                </Tooltip>
              </Box>}
            </Stack>
          </Container>
        </Grid>}
        {!isHomePage && <Grid item xs={12} md={6} >
          {!isHomePage && <Typography variant="body2"
                                      sx={{
                                        fontSize: 14,
                                        textAlign: { xs: 'center', md: 'left'},
                                        padding: { xs: '0.5rem', md: 0 }
                                      }}>
            {maybeContractAddress && <Tooltip title={`Explore ${project.name} Contract and Transactions`}>
                  <StyledAnchor href={mainBlockExplorerUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  display: 'unset',
                                }}>
                    {contractAddressString}
                  </StyledAnchor>
              </Tooltip>}
          </Typography>}
          <Typography variant="body2" sx={{ fontSize: 14, display: { xs: 'none', md: 'block' } }}>
            {project.copyright} 2023 by <StyledAnchor style={{ display: 'unset' }}
                                                      href={project.web}
                                                      target="_blank"
                                                      rel="noreferrer">
            {project.owner || project.name}
          </StyledAnchor>. {project.license}<StyledLink style={{ display: 'unset' }}
                                                          href={project.termsText}
                                                          rel="noreferrer">
            Terms Of Use
          </StyledLink>
          </Typography>
        </Grid>}
      </Grid>
    </footer>
  )
}

export default Footer
