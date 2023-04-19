import React, {useRef, useEffect, useState} from 'react';

const randomFloat = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};

const Pong: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [player1Score, setPlayer1Score] = useState<number>(0);
    const [player2Score, setPlayer2Score] = useState<number>(0);
    const paddleWidth = 10;
    const paddleHeight = 100;
    const paddleSpeed = 5;

    useEffect(() => {
            if (!canvasRef.current) return;

            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (!ctx) return;

            let ballX = canvas.width / 2;
            let ballY = canvas.height / 2;
            let ballSpeedX = 5;
            let ballSpeedY = 3;
            let ballColor = 'white';

            let paddle1Y = (canvas.height - paddleHeight) / 2;
            let paddle2Y = (canvas.height - paddleHeight) / 2;

            const keys = {
                up: false,
                down: false,
            };

            const keyDownHandler = (e: KeyboardEvent) => {
                if (e.key === 'ArrowUp') {
                    keys.up = true;
                } else if (e.key === 'ArrowDown') {
                    keys.down = true;
                }
            };

            const keyUpHandler = (e: KeyboardEvent) => {
                if (e.key === 'ArrowUp') {
                    keys.up = false;
                } else if (e.key === 'ArrowDown') {
                    keys.down = false;
                }
            };

            document.addEventListener('keydown', keyDownHandler);
            document.addEventListener('keyup', keyUpHandler);

            const draw = () => {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#2276a2";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Draw ball
                ctx.beginPath();
                ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
                ctx.fillStyle = ballColor;
                ctx.fill();
                ctx.closePath();

                // Draw paddles
                ctx.fillStyle = 'white';
                ctx.fillRect(0, paddle1Y, paddleWidth, paddleHeight);
                ctx.fillRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);
            };

            const move = () => {
                ballX += ballSpeedX;
                ballY += ballSpeedY;

                // Move player 1 paddle
                if (keys.up && paddle1Y > 0) {
                    paddle1Y -= paddleSpeed;
                }
                if (keys.down && paddle1Y < canvas.height - paddleHeight) {
                    paddle1Y += paddleSpeed;
                }

                // Bounce ball off top and bottom walls
                if (ballY <= 0 || ballY >= canvas.height) {
                    ballSpeedY = -ballSpeedY;
                    ballColor = getRandomColor();
                }

                // Bounce ball off paddles
                if (
                    (ballX <= paddleWidth && ballY > paddle1Y && ballY < paddle1Y + paddleHeight) ||
                    (ballX >= canvas.width - paddleWidth * 2 && ballY > paddle2Y && ballY < paddle2Y + paddleHeight)
                ) {
                    ballSpeedX = -ballSpeedX;
                    ballSpeedY += randomFloat(-2, 2);
                    ballColor = getRandomColor();
                }

                // Update scores
                if (ballX <= 0) {
                    setPlayer2Score((prevScore) => prevScore + 1);
                    resetBall();
                } else if (ballX >= canvas.width) {
                    setPlayer1Score((prevScore) => prevScore + 1);
                    resetBall();
                }
            };

            const resetBall = () => {
                ballX = canvas.width / 2;
                ballY = canvas.height / 2;
                ballSpeedX = -ballSpeedX;
            };

            const ai = () => {
                // Add a random delay to the AI's reaction time
                if (Math.random() < 0.93) {
                    // Make the AI paddle follow the ball with a slower speed
                    const aiPaddleSpeed = paddleSpeed * 0.7;

                    if (ballY < paddle2Y + paddleHeight / 2 && paddle2Y > 0) {
                        paddle2Y -= aiPaddleSpeed;
                    } else if (ballY > paddle2Y + paddleHeight / 2 && paddle2Y < canvas.height - paddleHeight) {
                        paddle2Y += aiPaddleSpeed;
                    }
                }
            };

            const getRandomColor = (): string => {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            };

            const gameLoop = () => {
                draw();
                move();
                ai();
            };

            const intervalId = setInterval(gameLoop, 1000 / 60);

            return () => {
                clearInterval(intervalId);
                document.removeEventListener('keydown', keyDownHandler);
                document.removeEventListener('keyup', keyUpHandler);
            };
        }, []
    )


    return (
        <div>
            <canvas ref={canvasRef} width="800" height="400" style={{backgroundColor: 'black'}}></canvas>
            <div>
                <p>Player 1: {player1Score}</p>
                <p>Player 2: {player2Score}</p>
            </div>
        </div>
    );
}


export default Pong;


