// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CeloClicker {
    uint256 public globalCounter;
    mapping(address => uint256) public userCounter;

    // Top 10 leaderboard
    address[10] public topAddresses;
    uint256[10] public topScores;

    event Tapped(address indexed user, uint256 userTotal, uint256 globalTotal);

    function tap() external {
        globalCounter += 1;
        userCounter[msg.sender] += 1;

        _updateLeaderboard(msg.sender, userCounter[msg.sender]);

        emit Tapped(msg.sender, userCounter[msg.sender], globalCounter);
    }

    function _updateLeaderboard(address user, uint256 score) internal {
        // Check if user already in leaderboard
        int256 existingIdx = -1;
        for (uint256 i = 0; i < 10; i++) {
            if (topAddresses[i] == user) {
                existingIdx = int256(i);
                topScores[i] = score;
                break;
            }
        }

        if (existingIdx < 0) {
            // Find minimum score position
            uint256 minIdx = 0;
            uint256 minScore = topScores[0];
            for (uint256 i = 1; i < 10; i++) {
                if (topScores[i] < minScore) {
                    minScore = topScores[i];
                    minIdx = i;
                }
            }
            if (score > minScore) {
                topAddresses[minIdx] = user;
                topScores[minIdx] = score;
                existingIdx = int256(minIdx);
            }
        }

        // Bubble up
        if (existingIdx >= 0) {
            uint256 idx = uint256(existingIdx);
            while (idx > 0 && topScores[idx] > topScores[idx - 1]) {
                (topAddresses[idx], topAddresses[idx - 1]) = (topAddresses[idx - 1], topAddresses[idx]);
                (topScores[idx], topScores[idx - 1]) = (topScores[idx - 1], topScores[idx]);
                idx--;
            }
        }
    }

    function getLeaderboard() external view returns (address[10] memory, uint256[10] memory) {
        return (topAddresses, topScores);
    }

    function getUserCount(address user) external view returns (uint256) {
        return userCounter[user];
    }
}
