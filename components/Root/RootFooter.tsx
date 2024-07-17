"use client"

import Image from "next/image";
import { Button } from "../utils/Button";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconCaretUpFilled, IconHelp } from "@tabler/icons-react";
import { Layout } from "../Layouts";
import { Modal } from "../utils/Modal";
import { useState } from "react";

export default function RootFooter() {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>("");

    const handleModalContent = (content: string) => {
        setModalContent(content);
        setModalActive(true);
    };

    return (
        <footer className="bg-black w-full">
            <Layout.Section className="">
                <Layout.Main className="gap-5">
                    <Layout.Div className="!items-start gap-5 !justify-between border-b border-purple py-5 max-md:flex-col">
                        <div className="flex flex-col gap-3">
                            <h1 className="_text">This website</h1>
                            <div className="_text  text-palette_gray cursor-pointer hover:text-white" onClick={() => handleModalContent('terms')}>Termos de uso</div>
                            <div className="_text  text-palette_gray cursor-pointer hover:text-white" onClick={() => handleModalContent('privacy')}>Aviso de privacidade</div>
                            <div className="_text  text-palette_gray cursor-pointer hover:text-white" onClick={() => handleModalContent('development')}>Seu desenvolvimento</div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="_text">Sobre</h1>
                            <div className="_text  text-palette_gray cursor-pointer hover:text-white" onClick={() => handleModalContent('contact')}>Contato</div>
                            <div className="_text  text-palette_gray cursor-pointer hover:text-white" onClick={() => handleModalContent('help')}>Ajuda</div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1 className="_text">Links</h1>
                            <div className="flex gap-3">
                                <Button.Wide rounded="lg" variant="red" wide="md" onClick={() => window.location.href = "https://www.instagram.com/indicatti_s/"}>
                                    <Button.Icon icon={<IconBrandInstagram />} />
                                </Button.Wide>
                                <Button.Wide rounded="lg" variant="blue" wide="md" onClick={() => window.location.href = "https://www.linkedin.com/in/joão-pedro-indicatti-07975b265/"}>
                                    <Button.Icon icon={<IconBrandLinkedin />} />
                                </Button.Wide>
                                <Button.Wide rounded="lg" variant="disabled" wide="md" onClick={() => window.location.href = "https://github.com/Indicattis"}>
                                    <Button.Icon icon={<IconBrandGithub />} />
                                </Button.Wide>
                            </div>
                        </div>
                    </Layout.Div>

                    <Layout.Div className="max-md:justify-start justify-between w-full gap-3 max-md:flex-col">
                        <div className="flex gap-3 items-center justify-center">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <Image alt="" src={`/img/profile/indicatti.jpg`} width={100} height={100} />
                            </div>
                            <div className="_text flex flex-col gap-2">
                                <h1>João Pedro Staehler Indicatti</h1>
                                <p className="_text _small text-palette_gray">2024, inc</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 _text">
                            <Button.Wide rounded="lg" variant="default" wide="md">
                                <a href="#exhibition"><Button.Icon icon={<IconCaretUpFilled />} /></a>
                            </Button.Wide>
                        </div>
                    </Layout.Div>
                    
                    <Layout.Div className="!justify-start w-full _text _small text-palette_gray gap-3">
                        Copright@ 2024, todos os direitos reservados
                    </Layout.Div>
                </Layout.Main>
            </Layout.Section>

            {modalActive && (
                <Modal.Root>
                    <Modal.Box>
                        <Modal.Message message={`Informações`} />
                        <Modal.Content className="flex flex-col gap-3">
                            {modalContent === 'terms' && (
                                <div className="_text">
                                    <p className="">Termos de uso:</p>
                                    <p className="_text ">
                                        Bem-vindo(a) à página profissional do Indicatti. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições:
                                        <br />
                                        1. Conteúdo e Uso
                                        O conteúdo disponibilizado neste site é para fins informativos e profissionais. Embora nos esforcemos para manter as informações atualizadas e precisas, não garantimos a integridade, precisão, confiabilidade ou atualidade das informações fornecidas. O uso das informações aqui contidas é de inteira responsabilidade do usuário.
                                        <br />
                                        2. Direitos Autorais
                                        Todo o conteúdo, incluindo textos, imagens, gráficos, e outros materiais, é de propriedade exclusiva de Indicatti ou de terceiros licenciados. A reprodução, distribuição ou qualquer outra forma de uso do conteúdo, sem a devida autorização, é estritamente proibida.
                                        <br />
                                        3. Links Externos
                                        Este site pode conter links para sites externos que não são operados por Indicatti. Não temos controle sobre o conteúdo e práticas desses sites e não nos responsabilizamos por suas políticas de privacidade ou termos de uso.
                                        <br />
                                        4. Limitação de Responsabilidade
                                        Em nenhuma circunstância, Indicatti será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da
                                    </p>
                                </div>
                            )}
                            {modalContent === 'privacy' && (
                                <div className="_text">
                                    <p className="">Aviso de privacidade:</p>
                                    <p className="_text ">
                                        Bem-vindo(a) à página profissional do Indicatti. Ao utilizar este site, você concorda com os seguintes termos de uso:
                                        <br />
                                        1. Informações e Conteúdo
                                        O conteúdo deste site é destinado a fornecer informações sobre o trabalho e os serviços oferecidos por Indicatti. Todo o material apresentado é de propriedade intelectual do Indicatti e está protegido por direitos autorais. O uso não autorizado de qualquer material deste site pode violar leis de direitos autorais, marcas comerciais e outras leis.
                                        <br />
                                        2. Limitação de Responsabilidade
                                        Indicatti não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou incapacidade de uso deste site. Isso inclui, mas não se limita a, danos por perda de lucros, dados ou outras perdas intangíveis.
                                        <br />
                                        3. Alterações no Site
                                        Indicatti reserva-se o direito de modificar, suspender ou descontinuar temporária ou permanentemente o site ou qualquer parte dele, com ou sem aviso prévio.
                                        <br />
                                        4. Links para Terceiros
                                        Este site pode conter links para outros sites que não são controlados por Indicatti. Indicatti não é responsável pelo conteúdo ou pelas práticas de privacidade desses outros sites.
                                        <br />
                                        5. Aceitação dos Termos
                                        Ao utilizar este site, você indica que leu, compreendeu e concorda em ficar vinculado(a) por estes termos de uso. Se você não concorda com estes termos, por favor, não utilize este site.
                                        <br />
                                        6. Contato
                                        Se você tiver alguma dúvida sobre estes termos de uso, entre em contato conosco através do e-mail: joao.indicatti@outlook.com
                                    </p>
                                </div>
                            )}
                            {modalContent === 'development' && (
                                <div className="_text">
                                    <p className="">Seu desenvolvimento:</p>
                                    <p className="_text ">
                                        Esse website foi desenvolvido utilizando React como framework de javascript, typescript como transpilador e tailwindCSS para o design. <br />
                                        As animações foram construidas com framer-motion. <br />
                                        Imagens e cores selecionadas exclusivamente para o desenvolvimento da página. <br />

                                    </p>
                                </div>
                            )}
                            {modalContent === 'contact' && (
                                <div className="_text">
                                    <div className="_text  flex flex-col gap-3">
                                        <div className="font-bold">Email: <a href="mailto:joao.indicatti@outlook.com?subject=Contato" className="font-normal text-neon_blue">joao.indicatti@outlook.com</a></div>
                                        <div className="font-bold">Telefone: <a href="https://wa.me/5554996598024?text=Olá!." className="font-normal text-neon_blue">+55 (54) 9 9659-8024</a></div>
                                        <div className="font-bold">Linkedin: <a href="https://www.linkedin.com/in/joão-pedro-indicatti-07975b265/" className="font-normal text-neon_blue">Linkedin</a></div>
                                    </div>
                                </div>
                            )}
                            {modalContent === 'help' && (
                                <div className="_text">
                                <div className="_text  flex flex-col gap-3">
                                    <p className="_text ">
                                        Se você precisa de ajuda, suporte ou dúvida, não exite em entrar em contato!<br />
                                    </p>
                                    <div className="font-bold flex gap-2 text-neon_blue"><IconHelp></IconHelp><a href="mailto:joao.indicatti@outlook.com?subject=Ajuda" className="">Contato</a></div>
                                </div>
                                </div>
                            )}
                        </Modal.Content>
                        <Modal.Button onClick={() => setModalActive(false)} />
                    </Modal.Box>
                </Modal.Root>
            )}
        </footer>
    );
}
